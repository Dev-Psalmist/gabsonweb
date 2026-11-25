import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import {
  ADDRESS,
  EMAIL,
  EMAIL_LINK,
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  LOGO,
  NAV,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "./data";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-ink pt-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_0.9fr]">
          <div>
            <Image
              src={LOGO}
              alt="Gabson Tailored"
              className="h-14 w-[164px]"
              fittingType="fit"
            />
            <p className="mt-6 max-w-xs text-[13.5px] leading-relaxed text-bone/45">
              Clothing (Brand) · Bespoke fashion brand &amp; consulting services. Men's
              tailoring, ceremonial wear and children's occasion pieces, made in Abuja.
            </p>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/30">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    className="text-[13.5px] text-bone/60 transition-colors hover:text-bone"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/book"
                  className="text-[13.5px] text-bone/60 transition-colors hover:text-bone"
                >
                  Book a fitting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/30">
              Atelier
            </p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-bone/60">
              {ADDRESS.line1}
              <br />
              {ADDRESS.line2}
            </p>
            <p className="mt-3 font-mono text-[9px] uppercase leading-relaxed tracking-[0.22em] text-bone/30">
              Mon – Sat · 09:00 – 19:00
              <br />
              By appointment
            </p>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/30">
              Direct
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 text-[13.5px] text-bone/60 transition-colors hover:text-bone"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-oxblood-light" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center gap-2.5 break-all text-[13.5px] text-bone/60 transition-colors hover:text-bone"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-oxblood-light" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-[13.5px] text-bone/60 transition-colors hover:text-bone"
                >
                  <Instagram className="h-3.5 w-3.5 text-oxblood-light" />
                  @{INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 select-none font-display text-[clamp(3.5rem,15vw,13rem)] leading-[0.8] tracking-[-0.02em] text-bone/10">
          Gabson
        </p>

        <div className="flex flex-col gap-2 border-t border-bone/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-bone/30">
            © {new Date().getFullYear()} Gabson · Precision in style
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-bone/30">
            Abuja, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}