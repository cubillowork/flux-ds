import { Icon } from '../icons/Icon';

// Figma: ❖ COMPONENTS → Feedback → "alert mobile" (Emergency | Warning | Info)
export type AlertItemProps = {
  level?: 'emergency' | 'warning' | 'info';
  title: string;
  /** Second line, e.g. the date or the system name. */
  meta?: string;
  /** Status text on the right, e.g. "Opened". */
  status?: string;
  onClick?: () => void;
};

export function AlertItem({ level = 'emergency', title, meta, status, onClick }: AlertItemProps) {
  return (
    <button type="button" className={`flux-alert flux-alert--${level}`} onClick={onClick}>
      <span className="flux-alert__content">
        <span className="flux-alert__title">
          <Icon name={level === 'info' ? 'Information' : 'Alert'} size={16} className="flux-alert__icon" />
          <span className="p4-semibold">{title}</span>
        </span>
        {meta && <span className="p5-regular">{meta}</span>}
      </span>
      {status && <span className="p4-semibold">{status}</span>}
      <Icon name="Arrow right" size={24} />
    </button>
  );
}
