import { icons, type IconName } from './icons';

type IconProps = {
  name: IconName;
  /** Size in px. Flux icons are drawn on a 24×24 grid. */
  size?: number;
  /** Any CSS colour, ideally a token: 'var(--color-interactive-primary)'. Defaults to the text colour. */
  color?: string;
  /** Accessible label. Without it the icon is decorative (aria-hidden). */
  label?: string;
  className?: string;
};

export function Icon({ name, size = 24, color, label, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={color ? { color } : undefined}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  );
}
