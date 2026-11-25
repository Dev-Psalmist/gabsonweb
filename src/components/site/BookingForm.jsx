import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { LOCATIONS, SERVICES, TIME_SLOTS, WHATSAPP_LINK } from "./data";
import FormField from "./FormField";

const EMPTY = {
  full_name: "",
  email: "",
  phone: "",
  service: SERVICES[0],
  preferred_date: "",
  preferred_time: TIME_SLOTS[1],
  location: LOCATIONS[0],
  notes: "",
};

const field =
  "w-full border-b border-bone/20 bg-transparent pb-2.5 text-[14px] text-bone outline-none transition-colors placeholder:text-bone/25 focus:border-oxblood [color-scheme:dark]";

export default function BookingForm() {
  const [values, setValues] = useState(EMPTY);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  const update = (key) => (event) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setError("");

    if (!values.full_name.trim() || !values.phone.trim()) {
      setError("Please add your name and a phone number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      setError("Please add an email address we can reply to.");
      return;
    }
    if (!values.preferred_date) {
      setError("Choose a preferred date for the fitting.");
      return;
    }

    setSaving(true);
    try {
      await base44.entities.Booking.create({
        ...values,
        full_name: values.full_name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        status: "new",
      });
      setDone(true);
    } catch {
      setError("That request didn't go through. Please try again or message us on WhatsApp.");
    } finally {
      setSaving(false);
    }
  };

  if (done) {
    return (
      <div className="border border-bone/12 bg-ink2 p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-oxblood text-oxblood-light">
          <Check className="h-5 w-5" />
        </span>
        <h2 className="mt-6 font-display text-3xl leading-tight text-bone">
          Your fitting is requested.
        </h2>
        <p className="mt-3 text-[14px] leading-relaxed text-bone/55">
          {values.preferred_date} at {values.preferred_time} — {values.service}. The studio
          will confirm by phone or WhatsApp within one working day.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 bg-oxblood px-5 py-3 font-mono text-[10px] uppercase tracking-[0.26em] text-bone transition-colors hover:bg-oxblood-light"
        >
          Confirm faster on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => {
            setValues(EMPTY);
            setDone(false);
          }}
          className="mt-4 block font-mono text-[9px] uppercase tracking-[0.24em] text-bone/35 transition-colors hover:text-bone"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-bone/12 bg-ink2 p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Full name">
          <input
            className={field}
            value={values.full_name}
            onChange={update("full_name")}
            placeholder="Your name"
            autoComplete="name"
          />
        </FormField>

        <FormField label="Email">
          <input
            className={field}
            type="email"
            value={values.email}
            onChange={update("email")}
            placeholder="you@email.com"
            autoComplete="email"
          />
        </FormField>

        <FormField label="Phone / WhatsApp">
          <input
            className={field}
            value={values.phone}
            onChange={update("phone")}
            placeholder="+234 …"
            autoComplete="tel"
          />
        </FormField>

        <FormField label="What is it for">
          <select className={field} value={values.service} onChange={update("service")}>
            {SERVICES.map((service) => (
              <option key={service} value={service} className="bg-ink text-bone">
                {service}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Preferred date">
          <input
            className={field}
            type="date"
            value={values.preferred_date}
            onChange={update("preferred_date")}
          />
        </FormField>

        <FormField label="Preferred time">
          <select
            className={field}
            value={values.preferred_time}
            onChange={update("preferred_time")}
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot} className="bg-ink text-bone">
                {slot}
              </option>
            ))}
          </select>
        </FormField>

        <div className="sm:col-span-2">
          <FormField label="Where">
            <select
              className={field}
              value={values.location}
              onChange={update("location")}
            >
              {LOCATIONS.map((location) => (
                <option key={location} value={location} className="bg-ink text-bone">
                  {location}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <div className="sm:col-span-2">
          <FormField
            label="Occasion & notes"
            hint="Wedding date, fabric you have in mind, or anything the cutter should know."
          >
            <textarea
              className={`${field} resize-none`}
              rows={3}
              value={values.notes}
              onChange={update("notes")}
              placeholder="Wedding in February — navy three-piece, peak lapel…"
            />
          </FormField>
        </div>
      </div>

      {error && (
        <p className="mt-5 border-l-2 border-oxblood-light pl-3 text-[12.5px] text-oxblood-light">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={saving}
        className="mt-7 inline-flex w-full items-center justify-center gap-2.5 bg-bone px-6 py-4 font-mono text-[11px] uppercase tracking-[0.26em] text-ink transition-colors hover:bg-oxblood hover:text-bone disabled:opacity-60 sm:w-auto"
      >
        {saving && <Loader2 className="h-4 w-4 animate-spin" />}
        {saving ? "Sending request" : "Request this fitting"}
      </button>
      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.22em] text-bone/30">
        No payment taken · confirmation within one working day
      </p>
    </form>
  );
}