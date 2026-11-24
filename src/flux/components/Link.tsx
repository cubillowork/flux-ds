import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

// Figma: ❖ COMPONENTS → Link → "Label" (default | hover | active | focus | disabled | visited) · p5 semibold
type LinkAsButton = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
export type LinkProps = LinkAsButton | LinkAsAnchor;

export function Link(props: LinkProps) {
  const className = ['flux-link', 't-caption-strong', props.className].filter(Boolean).join(' ');
  if (props.href !== undefined) return <a {...(props as LinkAsAnchor)} className={className} />;
  const { type = 'button', ...rest } = props as LinkAsButton;
  return <button type={type} {...rest} className={className} />;
}
