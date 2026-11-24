import { Icon } from '../icons/Icon';

// Figma: ❖ COMPONENTS → Feedback → "Info box" (Info tip | Warning tip | Error box)
export type InfoBoxProps = { type?: 'info' | 'warning' | 'error'; children: React.ReactNode };

export function InfoBox({ type = 'info', children }: InfoBoxProps) {
  return (
    <div className={`flux-infobox flux-infobox--${type}`} role={type === 'error' ? 'alert' : 'note'}>
      <Icon name={type === 'info' ? 'Information' : 'Alert'} size={16} className="flux-infobox__icon" />
      <div className="p5-regular">{children}</div>
    </div>
  );
}
