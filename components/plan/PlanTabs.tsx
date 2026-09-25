interface Props{
  active: "plan" | "saved";
  onChange: (value: "plan" | "saved") => void;
}

export default function PlanTabs({
  active,
  onChange,
}: Props){
  return (
    <div className="flex w-fit rounded-lg border border-[#29303b] bg-[#14171d] p-1">

      <button
        onClick={() => onChange("plan")}
        className={`rounded-md px-5 py-2 text-xs font-bold ${
          active === "plan"
            ? "bg-[#252b35] text-white"
            : "text-[#7d8695]"
        }`}
      >
        Today&apos;s Plan
      </button>

      <button
        onClick={() => onChange("saved")}
        className={`rounded-md px-5 py-2 text-xs font-bold ${
          active === "saved"
            ? "bg-[#252b35] text-white"
            : "text-[#7d8695]"
        }`}
      >
        Saved
      </button>

    </div>
  );
}