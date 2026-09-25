interface Props {
  value: "duration" | "calories" | "rating";
  onChange: (
    value: "duration" | "calories" | "rating"
  ) => void;
}

export default function SortDropdown({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-[#8b94a3]">
        Sort By
      </span>

      <select
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value as
              | "duration"
              | "calories"
              | "rating"
          )
        }
        className="select select-sm border-[#29303b] bg-[#14171d] text-white"
      >
        <option value="duration">
          Duration
        </option>

        <option value="calories">
          Calories
        </option>

        <option value="rating">
          Rating
        </option>
      </select>
    </div>
  );
}