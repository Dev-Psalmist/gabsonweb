import { Image } from "@/components/ui/image";
import { IMG } from "./data";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const CLOTH = [
  {
    name: "Super 120s – 150s wool",
    note: "Worsted, high-twist, chosen for drape and recovery in heat.",
  },
  {
    name: "Italian silk mikado",
    note: "Structured bridal cloth that holds a sculpted line without boning.",
  },
  {
    name: "Fresco & high-twist cotton",
    note: "Open weave for Abuja afternoons; creases fall out overnight.",
  },
  {
    name: "Milanese buttonholes",
    note: "Hand-worked, slightly raised — the detail you feel before you see.",
  },
];

export default function FabricLibrary() {
  return (
    <section id="cloth" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <Reveal>
          <TiltCard intensity={6}>
            <div className="relative overflow-hidden border border-bone/10">
              <Image
                src={IMG.collars}
                alt="Stacked pique collars in grey, pink, blue and lavender"
                className="aspect-[4/5] w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.3em] text-bone/65">
                Collar study · pique swatches
              </p>
            </div>
          </TiltCard>
        </Reveal>

        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/40">
            <span className="text-oxblood-light">03</span>
            <span className="h-px w-8 bg-bone/20" />
            The cloth library
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.05] text-bone">
            Chosen in the hand, <span className="italic text-oxblood-light">not on a screen</span>.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-[1.85] text-bone/55">
            We keep a working library of cloth in the studio, and you choose from it in
            person — weight, weave and sheen against your skin, under the light you will be
            photographed in.
          </p>

          <ul className="mt-10 divide-y divide-bone/10 border-y border-bone/10">
            {CLOTH.map((item) => (
              <li key={item.name} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="font-display text-lg text-bone">{item.name}</h3>
                <p className="max-w-xs text-[13px] leading-relaxed text-bone/45 sm:text-right">
                  {item.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 border-t border-bone/10 pt-12 sm:grid-cols-[minmax(0,300px)_1fr] sm:gap-14">
            <div className="overflow-hidden border border-bone/10">
              <Image
                src={IMG.durability}
                alt="Gold needle threaded with teal cotton resting on natural linen"
                className="aspect-[4/5] w-full"
              />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-bone/40">
                A note on cloth
              </p>
              <p className="mt-4 max-w-lg font-display text-[clamp(1.5rem,2.8vw,2.2rem)] leading-[1.22] text-bone">
                Cloth is the one decision you cannot{" "}
                <span className="italic text-oxblood-light">correct later</span>.
              </p>
              <p className="mt-4 max-w-md text-[14px] leading-[1.85] text-bone/50">
                Weight, weave and finish are chosen in the hand, in the studio, against
                Abuja light — how it breathes at 34°C, how it recovers after a long evening,
                how it looks in its fifth year.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}