import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/icons';

// Figma: ❖ COMPONENTS → Navigation → "Header mobile" (Arrow & title | Only arrow | Only title)
export function HeaderMobile({ title, onBack, actions }: { title?: string; onBack?: () => void; actions?: React.ReactNode }) {
  return (
    <header className="flux-header-mobile">
      {onBack && (
        <button type="button" className="flux-header-mobile__back" onClick={onBack} aria-label="Back">
          <Icon name="Arrow left" />
        </button>
      )}
      {title && <h1 className="p2-semibold flux-header-mobile__title">{title}</h1>}
      {actions && <div className="flux-header-mobile__actions">{actions}</div>}
    </header>
  );
}

// Figma: ❖ COMPONENTS → Navigation → "Navigation Bar Installers" / "Navigation Bar HO"
export type BottomNavItem<T extends string> = { value: T; label: string; icon: IconName; badge?: boolean };

export function BottomNav<T extends string>({
  items,
  value,
  onChange,
}: {
  items: readonly BottomNavItem<T>[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <nav className="flux-bottom-nav">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          className={`flux-bottom-nav__item${item.value === value ? ' is-active' : ''}`}
          aria-current={item.value === value ? 'page' : undefined}
          onClick={() => onChange(item.value)}
        >
          <span className="flux-bottom-nav__icon">
            <Icon name={item.icon} />
            {item.badge && <span className="flux-bottom-nav__badge" />}
          </span>
          <span className="p5-regular">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
