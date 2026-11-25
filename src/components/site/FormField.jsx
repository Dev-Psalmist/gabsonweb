export default function FormField({ label, children, hint }) {
  return (
    <label className="block">
      <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-bone/40">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {hint ? <span className="mt-1.5 block text-[11px] text-bone/30">{hint}</span> : null}
    </label>
  );
}