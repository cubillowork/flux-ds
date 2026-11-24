import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/icons';

// Figma: ❖ COMPONENTS → Data display → "Tag" (Category × Status)
export type TagStatus =
  | 'online'
  | 'offline'
  | 'on-grid'
  | 'off-grid'
  | 'emergency'
  | 'major'
  | 'minor'
  | 'info';

const config: Record<TagStatus, { label: string; icon: IconName }> = {
  online: { label: 'Online', icon: 'Wifi_connected' },
  offline: { label: 'Offline', icon: 'Wifi_disconnected' },
  'on-grid': { label: 'On-grid', icon: 'Grid' },
  'off-grid': { label: 'Off-grid', icon: 'Off-grid' },
  emergency: { label: 'Emergency', icon: 'Alert' },
  major: { label: 'Major alert', icon: 'Alert' },
  minor: { label: 'Minor alert', icon: 'Alert' },
  info: { label: 'Info', icon: 'Information' },
};

export type TagProps = {
  status: TagStatus;
  /** Override the default label (e.g. "2 alerts"). */
  children?: React.ReactNode;
};

export function Tag({ status, children }: TagProps) {
  const c = config[status];
  return (
    <span className={`flux-tag flux-tag--${status}`}>
      <Icon name={c.icon} size={12} />
      <span>{children ?? c.label}</span>
    </span>
  );
}
