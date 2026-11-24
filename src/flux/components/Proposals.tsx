import type { ButtonHTMLAttributes } from 'react';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/icons';

// PROPOSALS — patterns used by prototypes that are not in Flux Figma yet.
// Built with Flux tokens only. Validate them and add them to Figma, then remove the "proposal" mark.

/** Row in a list: optional icon, title, secondary text and something on the right (link, tag, value). */
export function ListItem({
  title,
  description,
  icon,
  trailing,
  onClick,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: IconName;
  trailing?: React.ReactNode;
  onClick?: () => void;
}) {
  const content = (
    <>
      {icon && <Icon name={icon} className="flux-list-item__icon" />}
      <span className="flux-list-item__content">
        <span className="p3-semibold">{title}</span>
        {description && <span className="p5-regular flux-list-item__description">{description}</span>}
      </span>
      {trailing && <span className="flux-list-item__trailing">{trailing}</span>}
    </>
  );
  return onClick ? (
    <button type="button" className="flux-list-item is-clickable" onClick={onClick}>
      {content}
    </button>
  ) : (
    <div className="flux-list-item">{content}</div>
  );
}

/** Coloured dot + label: "● Normal", "● In stock". */
export type StatusTone = 'success' | 'warning' | 'error' | 'neutral' | 'info';
export function StatusDot({ tone = 'success', children }: { tone?: StatusTone; children: React.ReactNode }) {
  return (
    <span className={`flux-status-dot flux-status-dot--${tone}`}>
      <span className="flux-status-dot__dot" />
      <span className="p5-regular">{children}</span>
    </span>
  );
}

/** Small uppercase label: HOT, NEW, Premier. */
export function Badge({ tone = 'brand', children }: { tone?: 'brand' | 'success' | 'warning' | 'error' | 'neutral'; children: React.ReactNode }) {
  return <span className={`flux-badge flux-badge--${tone}`}>{children}</span>;
}

/** Quantity "– 0 +". */
export function Stepper({
  value,
  onChange,
  min = 0,
  max = 999,
  label = 'Quantity',
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
}) {
  return (
    <div className="flux-stepper" role="group" aria-label={label}>
      <StepperButton aria-label="Decrease" disabled={value <= min} onClick={() => onChange(Math.max(min, value - 1))} icon="Remove" />
      <span className="p4-semibold flux-stepper__value" aria-live="polite">
        {value}
      </span>
      <StepperButton aria-label="Increase" disabled={value >= max} onClick={() => onChange(Math.min(max, value + 1))} icon="Add" />
    </div>
  );
}
function StepperButton({ icon, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { icon: IconName }) {
  return (
    <button type="button" className="flux-stepper__button" {...rest}>
      <Icon name={icon} size={16} />
    </button>
  );
}

/** Horizontal scroll of cards (news, events). Children keep their own width. */
export function Rail({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="flux-rail" role="list" aria-label={label}>
      {children}
    </div>
  );
}

/** Root-screen header: title that can open a view switcher + icon actions on the right. */
export function AppHeader({
  title,
  onTitleClick,
  switcherOpen,
  actions,
}: {
  title: string;
  /** When set, the title shows a chevron and opens the view switcher. */
  onTitleClick?: () => void;
  switcherOpen?: boolean;
  actions?: React.ReactNode;
}) {
  return (
    <header className="flux-app-header">
      {onTitleClick ? (
        <button type="button" className="flux-app-header__title" onClick={onTitleClick} aria-expanded={switcherOpen} aria-haspopup="dialog">
          <span className="h4">{title}</span>
          <Icon name={switcherOpen ? 'Expand up' : 'Expand down'} />
        </button>
      ) : (
        <h1 className="h4 flux-app-header__title">{title}</h1>
      )}
      {actions && <div className="flux-app-header__actions">{actions}</div>}
    </header>
  );
}
