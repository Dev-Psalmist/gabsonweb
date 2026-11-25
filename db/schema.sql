-- Gabson fitting requests. Run once against the Neon database:
--   psql "$DATABASE_URL" -f db/schema.sql
create table if not exists bookings (
  id             bigserial primary key,
  full_name      text        not null,
  email          text        not null,
  phone          text        not null,
  service        text        not null,
  preferred_date date        not null,
  preferred_time text        not null,
  location       text,
  notes          text,
  status         text        not null default 'new'
                 check (status in ('new', 'contacted', 'confirmed', 'completed', 'cancelled')),
  created_at     timestamptz not null default now()
);

create index if not exists bookings_date_idx on bookings (preferred_date, preferred_time);
