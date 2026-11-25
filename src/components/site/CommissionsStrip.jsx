import { Image } from "@/components/ui/image";
import { IMG } from "./data";
import Reveal from "./Reveal";

const PARTIES = [
  { img: IMG.agbadaGroup, label: "Fourteen agbada · one procession", ratio: "aspect-[16/10]" },
  { img: IMG.groomsDeck, label: "Groomsmen in sand wool", ratio: "aspect-[4/3]" },
  { img: IMG.groomsLine, label: "The line-up, matched", ratio: "aspect-[4/3]" },
];

export default function CommissionsStrip() {
  return (
    <section className="relative border-y border-bone/10 bg-ink2 py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/40">
              <span className="h-px w-8 bg-oxblood-light" />
              Commissions
            </div>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.1] text-bone">
              The whole party, dressed from{" "}
              <span className="italic text-oxblood-light">one table</span>.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-[1.8] text-bone/50">
            Wedding parties, agbada processions and groomsmen sets — the same pattern room
            and the same three fittings, at any scale.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {PARTIES.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.06}
              className={index === 0 ? "sm:col-span-2 lg:col-span-6" : "lg:col-span-3"}
            >
              <figure className="group relative overflow-hidden border border-bone/10 bg-ink">
                <Image
                  src={item.img}
                  alt={item.label}
                  className={`${item.ratio} w-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent px-4 pb-3.5 pt-10 font-mono text-[9px] uppercase tracking-[0.26em] text-bone/70">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}