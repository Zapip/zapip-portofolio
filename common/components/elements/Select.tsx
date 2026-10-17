import { CaretDownIcon } from "@phosphor-icons/react";

export interface SelectOption {
  value: string;
  label: string;
}

type SelectProps = {
  id: string;
  label: string;
  value: string;
  options: readonly string[] | readonly SelectOption[];
  onChange: (value: string) => void;
  allOptionLabel?: string;
  allValue?: string;
  className?: string;
  disabled?: boolean;
};

const selectClass =
  "w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-9 text-xs font-medium text-foreground transition duration-200 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm";

export function Select({
  id,
  label,
  value,
  options,
  onChange,
  allOptionLabel,
  allValue = "ALL",
  className = "",
  disabled = false,
}: SelectProps) {
  return (
    <section
      className={`flex w-full flex-col gap-1.5 sm:w-auto sm:min-w-36 ${className}`}
    >
      <label
        htmlFor={id}
        className="text-xs font-medium text-muted-foreground"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={id}
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
          className={selectClass}
        >
          {allOptionLabel && (
            <option value={allValue}>{allOptionLabel}</option>
          )}

          {options.map((option) => {
            const isString = typeof option === "string";
            const optionValue = isString ? option : option.value;
            const optionLabel = isString ? option : option.label;

            return (
              <option key={optionValue} value={optionValue}>
                {optionLabel}
              </option>
            );
          })}
        </select>

        <CaretDownIcon
          size={16}
          weight="bold"
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
      </div>
    </section>
  );
}