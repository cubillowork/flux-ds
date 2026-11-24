// Figma: ❖ COMPONENTS → Data display → "Progress circle" (Size sm 64 | md 160 | lg 200 · Label)
export type ProgressCircleProps = {
  value: number;
  size?: 'sm' | 'md' | 'lg';
  /** Text under the number, e.g. "Active users". Shown on md and lg. */
  label?: string;
  /** Text in the centre. Defaults to "{value}%". */
  valueText?: string;
};

const px = { sm: 64, md: 160, lg: 200 };

export function ProgressCircle({ value, size = 'md', label, valueText }: ProgressCircleProps) {
  const d = px[size];
  const stroke = size === 'sm' ? 6 : 16;
  const r = (d - stroke) / 2;
  const c = 2 * Math.PI * r;
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={`flux-progress-circle flux-progress-circle--${size}`} style={{ width: d, height: d }} role="progressbar" aria-valuenow={v} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <svg width={d} height={d} viewBox={`0 0 ${d} ${d}`}>
        <circle cx={d / 2} cy={d / 2} r={r} fill="none" strokeWidth={stroke} className="flux-progress-circle__track" />
        <circle
          cx={d / 2}
          cy={d / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={c * (1 - v / 100)}
          strokeLinecap="round"
          transform={`rotate(-90 ${d / 2} ${d / 2})`}
          className="flux-progress-circle__bar"
        />
      </svg>
      <span className="flux-progress-circle__text">
        <span className={size === 'sm' ? 't-caption-strong' : 't-number'}>{valueText ?? `${v}%`}</span>
        {label && size !== 'sm' && <span className="t-body flux-progress-circle__label">{label}</span>}
      </span>
    </div>
  );
}

// PROPOSAL — not in Flux Figma yet. Linear progress (training progress, tier progress).
export function ProgressBar({ value, label }: { value: number; label?: string }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className="flux-progress-bar" role="progressbar" aria-valuenow={v} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <div className="flux-progress-bar__fill" style={{ width: `${v}%` }} />
    </div>
  );
}
