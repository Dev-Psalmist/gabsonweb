import { TESTIMONIALS } from "./data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="relative border-y border-bone/10 bg-ink2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/40">
            <span className="text-oxblood-light">04</span>
            <span className="h-px w-8 bg-bone/20" />
            Client words
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.05] text-bone">
            Worn once, <span className="italic text-oxblood-light">remembered</span> for years.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08} className="h-full">
              <figure className="flex h-full flex-col justify-between border border-bone/10 bg-ink/60 p-7 transition-colors duration-500 hover:border-oxblood/50">
                <div>
                  <span className="font-display text-4xl leading-none text-oxblood-light">“</span>
                  <blockquote className="mt-2 font-display text-[19px] italic leading-[1.5] text-bone/85">
                    {item.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t border-bone/10 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone/80">
                    {item.name}
                  </p>
                  <p className="mt-1 text-[12.5px] text-bone/45">{item.role}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-oxblood-light/80">
                    {item.service}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}