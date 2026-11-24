import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/icons';
import { Button } from './Button';

// PROPOSALS — loading and empty states. Not in Flux Figma yet.

/** Shimmering placeholder block. */
export function Skeleton({
  width = '100%',
  height = 16,
  radius = 'sm',
  circle = false,
}: {
  width?: number | string;
  height?: number | string;
  radius?: 'sm' | 'md' | 'lg';
  circle?: boolean;
}) {
  return (
    <span
      className={`flux-skeleton${circle ? ' flux-skeleton--circle' : ''}`}
      style={{ width, height, borderRadius: circle ? '50%' : `var(--radius-${radius})` }}
      aria-hidden="true"
    />
  );
}

/** Lines of text placeholder; the last line is shorter. */
export function SkeletonText({ lines = 2, size = 'body' }: { lines?: number; size?: 'title' | 'body' | 'caption' }) {
  const h = size === 'title' ? 18 : size === 'body' ? 14 : 12;
  return (
    <span className="flux-skeleton-text" aria-hidden="true">
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton key={i} height={h} width={i === lines - 1 && lines > 1 ? '60%' : '100%'} />
      ))}
    </span>
  );
}

/** Card-shaped placeholder: title line, optional tags row, text lines. */
export function SkeletonCard({ lines = 2, tags = false, media = false }: { lines?: number; tags?: boolean; media?: boolean }) {
  return (
    <div className="flux-card flux-card--pad-none flux-skeleton-card" aria-hidden="true">
      {media && <Skeleton height={150} radius="sm" />}
      <div className="flux-skeleton-card__body">
        <Skeleton height={18} width="55%" />
        {tags && (
          <span className="flux-skeleton-card__row">
            <Skeleton width={56} height={22} />
            <Skeleton width={64} height={22} />
          </span>
        )}
        <SkeletonText lines={lines} size="caption" />
      </div>
    </div>
  );
}

/** Screen region announced as loading to assistive tech. */
export function LoadingRegion({ label = 'Loading', children }: { label?: string; children: React.ReactNode }) {
  return (
    <div role="status" aria-live="polite" aria-busy="true" className="flux-loading-region">
      <span className="flux-visually-hidden">{label}</span>
      {children}
    </div>
  );
}

/** Empty state: icon, title, one line of help and an optional action. */
export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: {
  icon: IconName;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flux-empty">
      <span className="flux-empty__icon">
        <Icon name={icon} size={28} />
      </span>
      <p className="t-subtitle">{title}</p>
      {description && <p className="t-body t-secondary">{description}</p>}
      {actionLabel && (
        <Button variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
