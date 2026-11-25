import { Image } from "@/components/ui/image";
import { IMG } from "./data";
import Reveal from "./Reveal";

const LAPELS = [
  { name: "Notch", note: "The everyday jacket. Quiet, correct, endlessly wearable." },
  { name: "Peak", note: "Formal weight. Worn with a tuxedo or a double-breasted cut." },
  { name: "Shawl", note: "One continuous curve — evening, black tie, no interruptions." },
];

export default function Journal() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative overflow-hidden border border-bone/10">
            <Image
              src={IMG.lapel}
              alt="Black tuxedo jacket with pleated white shirt and bow tie"
              className="aspect-[5/4] w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/40">
            <span className="text-oxblood-light">05</span>
            <span className="h-px w-8 bg-bone/20" />
            Field notes
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.06] text-bone">
            It is the small details that change the{" "}
            <span className="italic text-oxblood-light">formality</span> of a jacket.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-[1.85] text-bone/55">
            Three lapel shapes cover almost every occasion a man will be photographed for.
            We choose one with you at the first fitting — it decides how the jacket reads
            before anyone notices the cloth.
          </p>

          <ul className="mt-10 divide-y divide-bone/10 border-y border-bone/10">
            {LAPELS.map((lapel, index) => (
              <li key={lapel.name} className="flex items-baseline gap-5 py-5">
                <span className="font-mono text-[10px] tracking-[0.2em] text-bone/30">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-bone">{lapel.name}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-bone/50">
                    {lapel.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}