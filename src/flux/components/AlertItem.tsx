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
          <span className="t-body-strong">{title}</span>
        </span>
        {meta && <span className="t-caption">{meta}</span>}
      </span>
      {status && <span className="t-body-strong">{status}</span>}
      <Icon name="Arrow right" size={24} />
    </button>
  );
}
