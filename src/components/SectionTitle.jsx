export default function SectionTitle({ label, title, children }) {
  return (
    <div className="mb-7">
      <p className="mono mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#00D4FF]">{label}</p>
      <h2 className="display text-2xl font-black text-white sm:text-3xl">{title}</h2>
      {children && <p className="mt-3 max-w-3xl leading-7 text-slate-300">{children}</p>}
    </div>
  );
}
