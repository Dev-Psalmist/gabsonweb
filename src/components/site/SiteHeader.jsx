import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Menu, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import { INSTAGRAM_LINK, LOGO, NAV } from "./data";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-bone/10 bg-ink/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-4" aria-label="Gabson home">
          <Image
            src={LOGO}
            alt="Gabson Tailored"
            className="h-10 w-[116px] sm:h-12 sm:w-[140px]"
            fittingType="fit"
          />
          <span className="hidden font-mono text-[9px] uppercase leading-[1.6] tracking-[0.3em] text-bone/45 lg:block">
            Precision
            <br />
            in style
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/55 transition-colors hover:text-bone"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Gabson on Instagram"
            className="text-bone/50 transition-colors hover:text-bone"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <Link
            to="/book"
            className="border border-bone/25 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.26em] text-bone transition-colors hover:border-oxblood hover:bg-oxblood"
          >
            Book a fitting
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-bone lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-bone/10 bg-ink/95 px-5 pb-7 pt-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-bone/8 py-3.5 font-mono text-[11px] uppercase tracking-[0.28em] text-bone/70"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center bg-oxblood px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.26em] text-bone"
          >
            Book a fitting
          </Link>
        </div>
      )}
    </header>
  );
}