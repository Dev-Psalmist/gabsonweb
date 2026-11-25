import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PHONE_DISPLAY, WHATSAPP_LINK } from "./data";
import Reveal from "./Reveal";

export default function BookingBanner() {
  return (
    <section className="relative overflow-hidden bg-oxblood">
      <div className="pointer-events-none absolute inset-0 opacity-30 grid-paper" />
      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-bone/60">
            Fitting sessions · Wuse 2
          </p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.04] text-bone">
            Book the table. We'll take it from{" "}
            <span className="italic">there</span>.
          </h2>
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-bone/70">
            One hour, one set of measurements, and a plan for the garment. No obligation to
            commission on the day.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap items-center gap-3">
          <Link
            to="/book"
            className="group inline-flex items-center gap-3 bg-bone px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.26em] text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            Book a fitting
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-bone/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.26em] text-bone transition-colors hover:bg-bone/10"
          >
            {PHONE_DISPLAY}
          </a>
        </Reveal>
      </div>
    </section>
  );
}