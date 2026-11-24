import { Button, IconButton } from '../flux';
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

      <section className="f-section">
        <h2 className="h3">Code</h2>
        <pre className="code p5-regular">{`import { Button, IconButton } from './flux';

<Button icon="Add">New installation</Button>
<Button variant="secondary" size="small">Cancel</Button>
<Button size="big" fullWidth>Continue</Button>
<IconButton icon="Close" label="Close" />`}</pre>
      </section>
    </main>
  );
}
