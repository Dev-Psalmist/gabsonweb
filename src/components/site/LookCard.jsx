import { Image } from "@/components/ui/image";
import TiltCard from "./TiltCard";

export default function LookCard({ look }) {
  return (
    <TiltCard className="group relative h-full">
      <div className="relative h-full overflow-hidden border border-bone/10 bg-ink2">
        <div className={look.ratio}>
          <Image
            src={look.img}
            alt={`${look.title} — ${look.occasion}`}
            className="h-full w-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-bone/15" />
          <div className="absolute bottom-0 left-1/2 top-0 w-px bg-bone/15" />
          <span className="absolute right-4 top-4 font-mono text-[9px] uppercase tracking-[0.3em] text-bone/50">
            Blueprint
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-bone/45">
            <span>{look.id}</span>
            <span className="text-right">{look.occasion}</span>
          </div>
          <h3 className="mt-2 font-display text-2xl leading-tight text-bone sm:text-[26px]">
            {look.title}
          </h3>
          <p className="mt-2.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-bone/55">
            {look.fabric}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-bone/35">
            {look.cut}
          </p>
          <p className="mt-2.5 text-[12px] leading-relaxed text-bone/65 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-40 lg:group-hover:opacity-100">
            {look.note}
          </p>
        </div>
      </div>
    </TiltCard>
  );
}