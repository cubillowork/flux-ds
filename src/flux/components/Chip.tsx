import type { ButtonHTMLAttributes } from 'react';

// Figma: ❖ COMPONENTS → Forms → "chip" (Selected: Off | On | Hover | Focus | Disabled)
export type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean };

export function Chip({ selected = false, className, type = 'button', ...rest }: ChipProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={['flux-chip', selected && 'is-selected', className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
}

/** A row of chips where one is selected — filters like "All · Videos · Courses". */
export function ChipGroup<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  label?: string;
}) {
  return (
    <div className="flux-chip-group" role="group" aria-label={label}>
      {options.map((o) => (
        <Chip key={o.value} selected={o.value === value} onClick={() => onChange(o.value)}>
          {o.label}
        </Chip>
      ))}
    </div>
  );
}
