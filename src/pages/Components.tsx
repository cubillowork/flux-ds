import { useState } from 'react';
import {
  Button, IconButton, Tag, Chip, ChipGroup, Tabs, InfoBox, AlertItem,
  Card, CardHeader, CardBody, KeyValue, SectionHeader, HeaderMobile, BottomNav, Icon,
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
