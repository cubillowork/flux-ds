import { useEffect } from 'react';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/icons';

// Figma: ❖ COMPONENTS → Overlays → "Dropdown - Bottom sheet" + "Overlay" (color/overlay/40)
export type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  /** 'bottom' (default) slides up from the bottom; 'top' drops down under a header, e.g. a view switcher. */
  from?: 'bottom' | 'top';
};

export function BottomSheet({ open, onClose, title, description, children, from = 'bottom' }: BottomSheetProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className={`flux-sheet-layer flux-sheet-layer--${from}`}>
      <div className="flux-overlay" onClick={onClose} aria-hidden="true" />
      <div className={`flux-sheet flux-sheet--${from}`} role="dialog" aria-modal="true" aria-label={title}>
        {(title || description) && (
          <div className="flux-sheet__text">
            {title && <h2 className="h1">{title}</h2>}
            {description && <p className="p3-regular flux-sheet__description">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

// Figma: ❖ COMPONENTS → Navigation → "Horizontal navigation item" (Icon · Show icon · Show description)
export type NavItemProps = {
  title: string;
  description?: string;
  icon?: IconName;
  selected?: boolean;
  /** Show the arrow on the right (default true). */
  chevron?: boolean;
  onClick?: () => void;
};

export function NavItem({ title, description, icon, selected, chevron = true, onClick }: NavItemProps) {
  return (
    <button type="button" className={`flux-nav-item${selected ? ' is-selected' : ''}`} onClick={onClick} aria-current={selected || undefined}>
      {icon && (
        <span className="flux-nav-item__icon">
          <Icon name={icon} />
        </span>
      )}
      <span className="flux-nav-item__content">
        <span className="p2-semibold">{title}</span>
        {description && <span className="p5-regular flux-nav-item__description">{description}</span>}
      </span>
      {selected ? <Icon name="Check | Done_line" size={18} className="flux-nav-item__check" /> : chevron && <Icon name="Arrow right" size={16} />}
    </button>
  );
}
