import { Icon } from '../icons/Icon';

// Figma: cards in ❖ COMPONENTS → Cards ("system card") and the "Graph Header" used on the Installer home.
// White surface · radius sm · elevation/card.
export type CardProps = {
  children: React.ReactNode;
  /** Inner padding. 'none' when the card has a CardHeader or full-bleed content. */
  padding?: 'none' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
};

export function Card({ children, padding = 'lg', onClick, className }: CardProps) {
  const classes = ['flux-card', `flux-card--pad-${padding}`, onClick && 'is-clickable', className].filter(Boolean).join(' ');
  return onClick ? (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  ) : (
    <div className={classes}>{children}</div>
  );
}

/** Title bar on top of a card (Figma: "Graph Header"). Shows an arrow when it links somewhere. */
export function CardHeader({ title, onClick, action }: { title: string; onClick?: () => void; action?: React.ReactNode }) {
  const content = (
    <>
      <span className="p3-semibold">{title}</span>
      {action ?? (onClick && <Icon name="Arrow right" size={18} />)}
    </>
  );
  return onClick ? (
    <button type="button" className="flux-card-header is-clickable" onClick={onClick}>
      {content}
    </button>
  ) : (
    <div className="flux-card-header">{content}</div>
  );
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="flux-card-body">{children}</div>;
}

/** Label / value line inside a card (Figma system card: "Installed on · Jan 12, 2025"). */
export function KeyValue({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flux-kv">
      <span className="p5-regular">{label}</span>
      <span className="p5-semibold">{value}</span>
    </div>
  );
}

/** Section title with an optional "See all" link — used above lists and rails. */
export function SectionHeader({ title, actionLabel, onAction }: { title: string; actionLabel?: string; onAction?: () => void }) {
  return (
    <div className="flux-section-header">
      <h2 className="h5">{title}</h2>
      {actionLabel && (
        <button type="button" className="flux-link p5-semibold" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
