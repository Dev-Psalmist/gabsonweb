import { LOOKS } from "./data";
import LookCard from "./LookCard";
import Reveal from "./Reveal";

export default function Lookbook() {
  return (
    <section id="lookbook" className="relative bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bone/20 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/40">
            <span className="text-oxblood-light">01</span>
            <span className="h-px w-8 bg-bone/20" />
            The lookbook
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.9rem)] leading-[1.04] text-bone">
            The work, and how it was <span className="italic text-oxblood-light">built</span>.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-bone/55">
            Every commission is documented — cloth, cut, and the single decision that made
            it fit. Hover a piece to read the construction notes.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {LOOKS.map((look, index) => (
            <Reveal
              key={look.id}
              delay={(index % 3) * 0.07}
              className={`${look.span} h-full`}
            >
              <LookCard
                look={{
                  ...look,
                  id: `L-${String(index + 1).padStart(2, "0")}`,
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}