import { useState } from 'react';
import { Icon } from '../flux';
import { iconClickable, iconGeneral, type IconName } from '../flux';
import './Foundations.css';
import './Icons.css';

const colours = [
  { label: 'text/primary', value: 'var(--color-text-primary)' },
  { label: 'text/secondary', value: 'var(--color-text-secondary)' },
  { label: 'interactive/primary', value: 'var(--color-interactive-primary)' },
  { label: 'alert/error/icon', value: 'var(--color-alert-error-icon)' },
];

function Grid({ names, filter, colour }: { names: string[]; filter: string; colour: string }) {
  const shown = names.filter((n) => n.toLowerCase().includes(filter.toLowerCase()));
  if (!shown.length) return <p className="p4-regular f-note">No icons match “{filter}”.</p>;
  return (
    <div className="icon-grid">
      {shown.map((n) => (
        <button
          key={n}
          className="icon-cell"
          title={`Copy: <Icon name="${n}" />`}
          onClick={() => navigator.clipboard?.writeText(`<Icon name="${n}" />`)}
        >
          <Icon name={n as IconName} color={colour} />
          <span className="p6-regular">{n}</span>
        </button>
      ))}
    </div>
  );
}

export default function Icons() {
  const [filter, setFilter] = useState('');
  const [colour, setColour] = useState(colours[0].value);

  return (
    <main className="foundations">
      <header className="f-header">
        <p className="p5-semibold f-eyebrow">FLUX DS · IN CODE</p>
        <h1 className="h1">Icons</h1>
        <p className="p3-regular f-note">
          From the Icon Clickable and Icon General sets in Figma. 24×24, colour from tokens. Click an icon to copy its
          code.
        </p>
      </header>

      <section className="f-section icon-tools">
        <input
          className="icon-search p3-regular"
          placeholder="Search icons"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="icon-colours">
          {colours.map((c) => (
            <button
              key={c.label}
              className={`icon-colour p5-regular${colour === c.value ? ' is-active' : ''}`}
              onClick={() => setColour(c.value)}
            >
              <span className="mini-chip" style={{ background: c.value }} />
              {c.label}
            </button>
          ))}
        </div>
      </section>

      <section className="f-section">
        <h2 className="h3">Icon Clickable</h2>
        <p className="p4-regular f-note">{Object.keys(iconClickable).length} icons · all of the set</p>
        <Grid names={Object.keys(iconClickable)} filter={filter} colour={colour} />
      </section>

      <section className="f-section">
        <h2 className="h3">Icon General</h2>
        <p className="p4-regular f-note">
          {Object.keys(iconGeneral).length} of 69 · the ones prototypes need so far
        </p>
        <Grid names={Object.keys(iconGeneral)} filter={filter} colour={colour} />
      </section>
    </main>
  );
}
