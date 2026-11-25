const WORDS = [
  "Bespoke tailoring",
  "Bridal & ceremony",
  "Consultation",
  "Native & traditional",
  "Wuse 2 · Abuja",
  "Precision in style",
];

export default function Ticker() {
  const row = [...WORDS, ...WORDS];

  return (
    <div className="relative overflow-hidden border-y border-bone/10 bg-oxblood">
      <div className="flex w-max animate-marquee">
        {row.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="flex items-center gap-6 whitespace-nowrap px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.34em] text-bone/90"
          >
            {word}
            <span className="text-bone/35">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}