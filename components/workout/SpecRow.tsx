interface Props{
  label: string;
  value: string | number;
}

export default function SpecRow({
  label,
  value,
}: Props){
  return (
    <div className="flex items-center justify-between border-b border-[#242a34] px-5 py-4 last:border-b-0">
      <span className="text-xs font-bold uppercase tracking-wide text-[#8c95a3]">
        {label}
      </span>

      <span className="text-sm text-[#e5e8ed]">
        {value}
      </span>
    </div>
  );
}