import { ArrowUpRight, Clock, Instagram, Mail, MapPin, Navigation, Phone } from "lucide-react";
import {
  ADDRESS,
  DIRECTIONS_LINK,
  EMAIL,
  EMAIL_LINK,
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "./data";
import MapPanel from "./MapPanel";
import Reveal from "./Reveal";

const DETAILS = [
  {
    icon: MapPin,
    label: "Atelier",
    value: `${ADDRESS.line1}, ${ADDRESS.line2}`,
    href: DIRECTIONS_LINK,
  },
  { icon: Clock, label: "Hours", value: "Mon – Sat · 09:00 – 19:00, by appointment" },
  { icon: Phone, label: "Call / WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP_LINK },
  { icon: Mail, label: "Email", value: EMAIL, href: EMAIL_LINK },
  {
    icon: Instagram,
    label: "Instagram",
    value: `@${INSTAGRAM_HANDLE}`,
    href: INSTAGRAM_LINK,
  },
];

export default function Studio() {
  return (
    <section id="studio" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/40">
            <span className="text-oxblood-light">06</span>
            <span className="h-px w-8 bg-bone/20" />
            The studio
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.05] text-bone">
            Elgolea Close, <span className="italic text-oxblood-light">Wuse 2</span>.
          </h2>
          <p className="mt-5 text-[15px] leading-[1.85] text-bone/55">
            The atelier is a working studio, not a shop — visits are by appointment so the
            cutting table is yours for the hour.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <Reveal>
            <ul className="divide-y divide-bone/10 border-y border-bone/10">
              {DETAILS.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <div className="flex items-start gap-4 py-5">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-oxblood-light" />
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/35">
                        {detail.label}
                      </p>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-bone/80">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <li key={detail.label}>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="group block transition-colors hover:text-bone"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <a
              href={DIRECTIONS_LINK}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-3 border border-bone/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.26em] text-bone transition-colors hover:border-oxblood hover:bg-oxblood"
            >
              <Navigation className="h-3.5 w-3.5" />
              Get directions
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <MapPanel />
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.24em] text-bone/30">
              Live map · tap the marker for directions to the atelier
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}