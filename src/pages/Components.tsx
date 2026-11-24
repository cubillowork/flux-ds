import { useState } from 'react';
import {
  Button, IconButton, Tag, Chip, ChipGroup, Tabs, InfoBox, AlertItem,
  Card, CardHeader, CardBody, KeyValue, SectionHeader, HeaderMobile, BottomNav, Icon,
  Link, TextField, SearchField, BottomSheet, NavItem, ProgressCircle, ProgressBar,
  ListItem, StatusDot, Badge, Stepper, Rail, AppHeader,
  Skeleton, SkeletonText, SkeletonCard, EmptyState,
} from '../flux';
import './Foundations.css';
import './Components.css';

const states = ['default', 'hover', 'focus', 'pressed', 'disabled'] as const;
const sizes = ['big', 'medium', 'small'] as const;
const variants = ['primary', 'secondary'] as const;
const label = { big: 'Big', medium: 'Medium', small: 'Small' };

function Matrix({ withIcon }: { withIcon: boolean }) {
  return (
    <table className="state-matrix">
      <thead>
        <tr>
          <th />
          {states.map((s) => (
            <th key={s} className="p5-semibold">
              {s[0].toUpperCase() + s.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {variants.map((v) =>
          sizes.map((size, i) => (
            <tr key={v + size}>
              <th className="p5-semibold">{i === 0 ? v[0].toUpperCase() + v.slice(1) : ''}</th>
              {states.map((s) => (
                <td key={s}>
                  <Button
                    variant={v}
                    size={size}
                    icon={withIcon ? 'Edit' : undefined}
                    data-state={s === 'default' ? undefined : s}
                    disabled={s === 'disabled'}
                    tabIndex={-1}
                  >
                    {label[size]}
                  </Button>
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}


function MoreComponents() {
  const [chip, setChip] = useState<'all' | 'videos' | 'courses' | 'live'>('all');
  const [tab, setTab] = useState<'overview' | 'devices' | 'alerts'>('overview');
  const [nav, setNav] = useState<'home' | 'systems' | 'support' | 'warranty' | 'me'>('home');
  return (
    <>
      <section className="f-section">
        <h2 className="h3">Tag</h2>
        <p className="p4-regular f-note">Category × Status · 12px icon · p6 · radius 2.</p>
        <div className="try-row">
          {(['online', 'offline', 'on-grid', 'off-grid', 'emergency', 'major', 'minor', 'info'] as const).map((s) => (
            <Tag key={s} status={s} />
          ))}
        </div>
      </section>

      <section className="f-section">
        <h2 className="h3">Chip</h2>
        <p className="p4-regular f-note">Off · On · Hover · Focus · Disabled — and a ChipGroup for filters.</p>
        <div className="try-row">
          <Chip>Off</Chip>
          <Chip selected>On</Chip>
          <Chip data-state="hover">Hover</Chip>
          <Chip data-state="focus">Focus</Chip>
          <Chip disabled>Disabled</Chip>
        </div>
        <ChipGroup
          label="Filter"
          value={chip}
          onChange={setChip}
          options={[
            { value: 'all', label: 'All' },
            { value: 'videos', label: 'Videos' },
            { value: 'courses', label: 'Courses' },
            { value: 'live', label: 'Live training' },
          ]}
        />
      </section>

      <section className="f-section">
        <h2 className="h3">Tabs</h2>
        <Tabs
          value={tab}
          onChange={setTab}
          tabs={[
            { value: 'overview', label: 'Overview' },
            { value: 'devices', label: 'Devices' },
            { value: 'alerts', label: 'Alerts' },
          ]}
        />
      </section>

      <section className="f-section">
        <h2 className="h3">Info box and Alert</h2>
        <div className="stack-327">
          <InfoBox type="info">Complete the X5 training before commissioning.</InfoBox>
          <InfoBox type="warning">Homeowner consent is missing.</InfoBox>
          <InfoBox type="error">The inverter is not responding.</InfoBox>
          <AlertItem level="emergency" title="Battery fault" meta="Jensen Residence · 24/11/26" status="Opened" />
          <AlertItem level="warning" title="Communication lost" meta="Rossi Residence · 23/11/26" />
          <AlertItem level="info" title="Firmware update available" meta="3 systems" />
        </div>
      </section>

      <section className="f-section">
        <h2 className="h3">Card</h2>
        <p className="p4-regular f-note">White · radius sm · elevation/card. CardHeader = Figma “Graph Header”. KeyValue and SectionHeader for content.</p>
        <div className="stack-327">
          <Card padding="none">
            <CardHeader title="Systems overview" onClick={() => {}} />
            <CardBody>
              <div className="try-row"><span className="h2">102</span><span className="p3-regular">Total systems</span></div>
              <div className="try-row"><Tag status="online">90 normal</Tag><Tag status="major">12 alerts</Tag><Tag status="offline">5 offline</Tag></div>
            </CardBody>
          </Card>
          <Card>
            <span className="p2-semibold">System Name 001</span>
            <div className="try-row"><Tag status="online" /><Tag status="on-grid" /></div>
            <div className="try-row p5-regular"><Icon name="Location" size={18} />Hamburg · Hauptstrasse 4a</div>
            <KeyValue label="Installed on" value="Jan 12, 2025" />
            <KeyValue label="Inverter ID #" value="S1A23B456789012" />
          </Card>
          <SectionHeader title="Latest news" actionLabel="See all" onAction={() => {}} />
        </div>
      </section>

      <section className="f-section">
        <h2 className="h3">Mobile: Header and Bottom navigation</h2>
        <p className="p4-regular f-note">Header mobile (Arrow & title) and Navigation Bar Installers. Items are configurable.</p>
        <div className="phone-demo">
          <HeaderMobile title="System details" onBack={() => {}} actions={<IconButton icon="Notifications | Bell" label="Notifications" variant="secondary" />} />
          <div className="phone-demo__body p4-regular f-note">Screen content</div>
          <BottomNav
            value={nav}
            onChange={setNav}
            items={[
              { value: 'home', label: 'Home', icon: 'Home | House | Other' },
              { value: 'systems', label: 'Systems', icon: 'List' },
              { value: 'support', label: 'Support', icon: 'Support' },
              { value: 'warranty', label: 'Warranty', icon: 'agreement', badge: true },
              { value: 'me', label: 'Me', icon: 'Person_user' },
            ]}
          />
        </div>
      </section>
    </>
  );
}

function Proposal() {
  return <span className="proposal-mark p6-semibold">PROPOSAL · not in Figma yet</span>;
}

function FormsAndOverlays() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState('installs');
  const views = [
    { value: 'installs', title: 'Installs', description: 'Commissioning and monitor systems', icon: 'PV | Solar system' },
    { value: 'academy', title: 'Academy', description: 'Training videos, live training and courses', icon: 'Idea' },
    { value: 'partner', title: 'Partner program', description: 'Your tier, benefits, leads and marketing', icon: 'agreement' },
    { value: 'buy', title: 'Buy products', description: 'Catalogue, cart and price requests', icon: 'My products' },
  ] as const;
  const current = views.find((v) => v.value === view)!;
  return (
    <>
      <section className="f-section">
        <h2 className="h3">Link</h2>
        <p className="p4-regular f-note">Figma “Label” in the Link frame · p5 semibold · link tokens.</p>
        <div className="try-row">
          <Link onClick={() => {}}>Register</Link>
          <Link href="#/components">See all</Link>
          <Link disabled>Disabled</Link>
        </div>
      </section>

      <section className="f-section">
        <h2 className="h3">Text field</h2>
        <p className="p4-regular f-note">Figma “Input” + “Field” · md 36 / lg 48 · label, hint, error, icon, unit.</p>
        <div className="stack-327">
          <SearchField placeholder="Search SKU, model or product" aria-label="Search" />
          <TextField label="Serial number" placeholder="S1A23B456789012" hint="On the label under the inverter" required />
          <TextField label="System size" defaultValue="8.2" unit="kW" />
          <TextField label="Homeowner email" defaultValue="jess@" error="Enter a valid email" />
          <TextField label="Installer ID" defaultValue="INST-0042" disabled size="md" />
        </div>
      </section>

      <section className="f-section">
        <h2 className="h3">Bottom sheet and Nav item</h2>
        <p className="p4-regular f-note">Figma “Dropdown - Bottom sheet”, “Overlay” and “Horizontal navigation item”. Here used as the view switcher (from="top").</p>
        <div className="phone-demo" style={{ position: 'relative', height: 420 }}>
          <AppHeader
            title={current.title}
            onTitleClick={() => setOpen(!open)}
            switcherOpen={open}
            actions={<><IconButton icon="Search" label="Search" variant="secondary" /><IconButton icon="Notifications | Bell" label="Notifications" variant="secondary" /></>}
          />
          <div className="phone-demo__body p4-regular f-note">Tap the title</div>
          <BottomSheet open={open} onClose={() => setOpen(false)} from="top" offsetTop={48}>
            {views.map((v) => (
              <NavItem key={v.value} icon={v.icon} title={v.title} description={v.description} selected={v.value === view} onClick={() => { setView(v.value); setOpen(false); }} />
            ))}
          </BottomSheet>
        </div>
        <NavItem icon="Settings | Gear" title="System mode" description="Change battery capacity" />
      </section>

      <section className="f-section">
        <h2 className="h3">Progress circle</h2>
        <div className="try-row">
          <ProgressCircle value={40} size="sm" />
          <ProgressCircle value={40} size="md" label="Active users" />
        </div>
      </section>

      <section className="f-section">
        <h2 className="h3">Proposals <Proposal /></h2>
        <p className="p4-regular f-note">Patterns the Installer prototype needs that Flux Figma doesn't have yet. Built only with Flux tokens — validate them and add them to Figma.</p>

        <h3 className="h6">AppHeader — root screens, title opens the view switcher</h3>
        <div className="phone-demo" style={{ height: 'auto' }}>
          <AppHeader title="Installs" onTitleClick={() => {}} actions={<IconButton icon="Notifications | Bell" label="Notifications" variant="secondary" />} />
        </div>

        <h3 className="h6">ProgressBar</h3>
        <div className="stack-327">
          <div className="try-row"><span className="h3">35%</span><span className="p4-regular f-note">to Premier</span></div>
          <ProgressBar value={35} label="Progress to Premier" />
          <span className="p5-regular f-note">7 of 20 storage kits purchased</span>
        </div>

        <h3 className="h6">ListItem</h3>
        <div className="stack-327">
          <Card padding="none">
            <CardHeader title="Pending warranties" onClick={() => {}} />
            <div style={{ padding: '0 var(--spacing-md)' }}>
              <ListItem title="Jess Becker" description="Commissioned 12 Nov · not registered" trailing={<Link>Register</Link>} />
              <ListItem title="Martin Ruiz" description="Draft · missing homeowner consent" trailing={<Link>Register</Link>} />
            </div>
          </Card>
          <Card padding="md">
            <ListItem icon="Check | Done_line" title="Base discount on purchases" />
            <ListItem icon="Lock" title="Marketing support" trailing={<Badge>Premier</Badge>} />
          </Card>
        </div>

        <h3 className="h6">StatusDot and Badge</h3>
        <div className="try-row">
          <StatusDot tone="success">Normal</StatusDot>
          <StatusDot tone="warning">Alerts</StatusDot>
          <StatusDot tone="neutral">Offline</StatusDot>
          <StatusDot tone="info">In stock soon</StatusDot>
          <Badge tone="error">Hot</Badge>
          <Badge tone="success">New</Badge>
          <Badge>Premier</Badge>
        </div>

        <h3 className="h6">Stepper</h3>
        <StepperDemo />

        <h3 className="h6">Rail</h3>
        <div className="stack-327" style={{ overflow: 'hidden' }}>
          <Rail label="Latest news">
            {['SunPower Installer App: More Control, More Value', 'SunPower Origin is here', 'Winning with Back Contact'].map((t) => (
              <Card key={t} padding="md" className="rail-card">
                <span className="p4-semibold">{t}</span>
                <span className="p5-regular f-note">21 July 2026</span>
                <Link>Read more</Link>
              </Card>
            ))}
          </Rail>
        </div>
      </section>
    </>
  );
}

function StepperDemo() {
  const [q, setQ] = useState(0);
  return <Stepper value={q} onChange={setQ} />;
}

export default function Components() {
  return (
    <main className="foundations">
      <header className="f-header">
        <p className="p5-semibold f-eyebrow">FLUX DS · IN CODE</p>
        <h1 className="h1">Components</h1>
        <p className="p3-regular f-note">Compare with ❖ COMPONENTS in Figma. States are forced here so you can see them all at once.</p>
      </header>

      <section className="f-section">
        <h2 className="h3">Button</h2>
        <p className="p4-regular f-note">Type × Size × State. Labels: Big p2, Medium p4, Small p5 · radius sm · focus = 3px inner border.</p>
        <h3 className="h6">Base button</h3>
        <Matrix withIcon={false} />
        <h3 className="h6">With icon</h3>
        <Matrix withIcon />
      </section>

      <section className="f-section">
        <h2 className="h3">Try it</h2>
        <p className="p4-regular f-note">Real states: hover, click, and Tab with the keyboard to see focus.</p>
        <div className="try-row">
          <Button icon="Add">New installation</Button>
          <Button variant="secondary">Register warranty</Button>
          <Button size="small" variant="secondary" icon="Filter">Filter</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="try-mobile">
          <Button size="big" fullWidth icon="Add">New installation</Button>
          <span className="p5-regular f-note">fullWidth — for mobile screens</span>
        </div>
      </section>

      <section className="f-section">
        <h2 className="h3">Button icon</h2>
        <p className="p4-regular f-note">20×20 · Icon Clickable 18px · Default = brand colour, Secondary = text colour.</p>
        <table className="state-matrix">
          <thead>
            <tr>
              <th />
              {states.map((s) => (
                <th key={s} className="p5-semibold">{s[0].toUpperCase() + s.slice(1)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(['default', 'secondary'] as const).map((v) => (
              <tr key={v}>
                <th className="p5-semibold">{v === 'default' ? 'Primary' : 'Secondary'}</th>
                {states.map((s) => (
                  <td key={s}>
                    <IconButton icon="Close" label="Close" variant={v} data-state={s === 'default' ? undefined : s} disabled={s === 'disabled'} tabIndex={-1} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <MoreComponents />
      <FormsAndOverlays />

      <section className="f-section">
        <h2 className="h3">Loading and empty states <Proposal /></h2>
        <p className="p4-regular f-note">Skeletons keep the layout of the content that is coming; empty states say what happened and what to do next.</p>
        <div className="try-row" style={{ alignItems: 'flex-start' }}>
          <div className="stack-327">
            <SkeletonCard tags lines={2} />
            <SkeletonCard media lines={1} />
            <div className="try-row"><Skeleton circle width={40} height={40} /><SkeletonText lines={2} /></div>
          </div>
          <div className="stack-327" style={{ background: 'var(--color-background-subtle)', borderRadius: 8 }}>
            <EmptyState icon="Search" title="No systems match" description="Try another name, address or ID." actionLabel="Clear search" onAction={() => {}} />
          </div>
        </div>
      </section>

      <section className="f-section">
        <h2 className="h3">Refinements in v0.4.0 <Proposal /></h2>
        <p className="p4-regular f-note">Differences from the Figma file, to be updated there: cards radius 8 (was 4) and softer elevation (0 2 8 · 6%); 16px padding inside cards and card headers; press feedback and focus ring on tappable surfaces; tabular figures for numbers; Button medium and Chip text 14px (was 13).</p>
      </section>

      <section className="f-section">
        <h2 className="h3">Code</h2>
        <pre className="code p5-regular">{`import { Button, IconButton, Card, CardHeader, Tag } from 'flux-ds';

<Button icon="Add">New installation</Button>
<Button variant="secondary" size="small">Cancel</Button>
<Button size="big" fullWidth>Continue</Button>
<IconButton icon="Close" label="Close" />
<Tag status="major">12 alerts</Tag>
<Card padding="none"><CardHeader title="Systems overview" onClick={open} />…</Card>`}</pre>
      </section>
    </main>
  );
}
