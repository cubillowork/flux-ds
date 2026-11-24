import type { ButtonHTMLAttributes } from 'react';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/icons';

// Figma: ❖ COMPONENTS → Buttons → "Button"
// Type = Primary | Secondary · Size = Small | Medium | Big · With icon = Yes | No
// State (Default / Hover / Focus / Pressed / Disabled) comes from the browser: :hover, :focus-visible, :active, disabled.
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'big';
  /** Icon Clickable shown before the label (Figma: With icon = Yes). */
  icon?: IconName;
  /** Stretch to the width of the container (common in mobile screens). */
  fullWidth?: boolean;
};

export function Button({
  variant = 'primary',
  size = 'medium',
  icon,
  fullWidth,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = ['flux-button', `flux-button--${variant}`, `flux-button--${size}`, fullWidth && 'flux-button--full', className]
    .filter(Boolean)
    .join(' ');
  return (
    <button type={type} className={classes} {...rest}>
      {icon && <Icon name={icon} className="flux-button__icon" />}
      <span>{children}</span>
    </button>
  );
}

// Figma: ❖ COMPONENTS → Buttons → "Button icon"
// Type = Default (brand colour) | Secondary (text colour)
export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconName;
  /** Required: icon-only buttons need a name for screen readers. */
  label: string;
  variant?: 'default' | 'secondary';
};

export function IconButton({ icon, label, variant = 'default', className, type = 'button', ...rest }: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={['flux-icon-button', `flux-icon-button--${variant}`, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <Icon name={icon} size={18} />
    </button>
  );
}
