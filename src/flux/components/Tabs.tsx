// Figma: ❖ COMPONENTS → Navigation → "tabs menu" + "item" (default | selected | Hover | disabled)
export type TabsProps<T extends string> = {
  tabs: readonly { value: T; label: string; disabled?: boolean }[];
  value: T;
  onChange: (value: T) => void;
  label?: string;
};

export function Tabs<T extends string>({ tabs, value, onChange, label }: TabsProps<T>) {
  return (
    <div className="flux-tabs" role="tablist" aria-label={label}>
      {tabs.map((t) => (
        <button
          key={t.value}
          role="tab"
          type="button"
          aria-selected={t.value === value}
          disabled={t.disabled}
          className={`flux-tab${t.value === value ? ' is-selected' : ''}`}
          onClick={() => onChange(t.value)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
