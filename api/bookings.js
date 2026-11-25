import { neon } from "@neondatabase/serverless";

// Fitting requests from the "Book a fitting" page, stored in Postgres (Neon).
// POST /api/bookings
const MAX = { name: 80, email: 120, phone: 40, service: 80, location: 80, notes: 800 };

const clean = (value, limit) =>
  typeof value === "string" ? value.trim().slice(0, limit) : "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return res.status(500).json({ error: "Bookings are not configured yet." });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body || "{}");
    } catch {
      return res.status(400).json({ error: "Invalid JSON body." });
    }
  }
  body = body || {};

  const full_name = clean(body.full_name, MAX.name);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const service = clean(body.service, MAX.service);
  const preferred_date = clean(body.preferred_date, 10);
  const preferred_time = clean(body.preferred_time, 20);
  const location = clean(body.location, MAX.location);
  const notes = clean(body.notes, MAX.notes);

  if (!full_name || !email || !phone || !service || !preferred_date || !preferred_time) {
    return res.status(400).json({ error: "Name, email, phone, service, date and time are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "That email address does not look right." });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(preferred_date)) {
    return res.status(400).json({ error: "Date must be YYYY-MM-DD." });
  }

  try {
    const sql = neon(databaseUrl);
    // Safe, idempotent bootstrap: keeps a fresh Neon database ready without a manual console migration.
    await sql`
      create table if not exists bookings (
        id bigserial primary key,
        full_name text not null,
        email text not null,
        phone text not null,
        service text not null,
        preferred_date date not null,
        preferred_time text not null,
        location text,
        notes text,
        status text not null default 'new'
          check (status in ('new', 'contacted', 'confirmed', 'completed', 'cancelled')),
        created_at timestamptz not null default now()
      )
    `;
    await sql`create index if not exists bookings_date_idx on bookings (preferred_date, preferred_time)`;
    const [row] = await sql`
      insert into bookings (full_name, email, phone, service, preferred_date, preferred_time, location, notes, status)
      values (${full_name}, ${email}, ${phone}, ${service}, ${preferred_date}, ${preferred_time},
              ${location || null}, ${notes || null}, 'new')
      returning id, created_at
    `;
    return res.status(201).json({ ok: true, id: String(row.id) });
  } catch (error) {
    console.error("booking insert failed", error);
    return res.status(502).json({ error: "Could not save the booking." });
  }
}
