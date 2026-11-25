import { Image } from "@/components/ui/image";
import { IMG } from "./data";
import Reveal from "./Reveal";

const GOALS = [
  {
    n: "01",
    title: "Exact fit, never a size",
    body: "Every pattern is drafted from your measurements — never graded from a block. Three fittings before a garment leaves the table.",
  },
  {
    n: "02",
    title: "Cloth chosen in the hand",
    body: "Super 120s–150s wool, Italian silk mikado and fresco weaves, selected for Abuja's climate and the way you will actually wear it.",
  },
  {
    n: "03",
    title: "One composition, two people",
    body: "Groom and bride are drafted together, so a couple reads as a single image in every photograph taken that day.",
  },
  {
    n: "04",
    title: "A date is a promise",
    body: "Confirmed delivery windows, a 21-day average build, and a final press before the garment is boxed and handed over.",
  },
];

export default function Atelier() {
  return (
    <section id="atelier" className="relative overflow-hidden bg-bone py-24 text-ink sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative mb-10">
          <div className="overflow-hidden">
            <Image
              src={IMG.facade}
              alt="Couple in bespoke formal wear outside a colonnaded building"
              className="aspect-[5/6] w-full grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <div className="absolute -bottom-8 right-3 w-44 border border-ink/10 bg-bone p-4 sm:right-6 sm:w-52">
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-ink/40">
              House discipline
            </p>
            <p className="mt-2 font-display text-xl leading-tight">
              Measured once. Worn for years.
            </p>
          </div>
        </Reveal>

        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-ink/40">
            <span className="text-oxblood">02</span>
            <span className="h-px w-8 bg-ink/20" />
            The house
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.05]">
            A house built on one measurement:{" "}
            <span className="italic text-oxblood">yours</span>.
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-ink/65">
            <p>
              Gabson is a bespoke fashion brand and consulting studio in Abuja, built on a
              single idea: clothing should be engineered to one body, not adjusted to a
              size. We dress men for the days that matter — suits, native wear, ceremonial
              jackets — and we make children's occasion pieces with the same discipline as
              the adult work.
            </p>
            <p>
              Every commission starts at the table: a measurement session, a cloth
              selection, and a conversation about how you live in the garment. Nothing is
              cut until the plan is agreed.
            </p>
          </div>

          <div className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-ink/40">
              Our goals
            </p>
            <ul className="mt-4 divide-y divide-ink/10 border-t border-ink/10">
              {GOALS.map((goal) => (
                <li key={goal.n} className="flex gap-5 py-5">
                  <span className="mt-1 font-mono text-[10px] tracking-[0.2em] text-oxblood">
                    {goal.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg leading-tight">{goal.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/55">
                      {goal.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}