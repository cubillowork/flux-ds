import { tokens, textStyles } from '../tokens.generated';
import './Foundations.css';

type Token = (typeof tokens)[number];

const byCollection = (collection: string) => tokens.filter((t) => t.collection === collection);

// Resolve an alias chain to its final raw value, for display only.
const resolve = (t: Token): string => {
  let current: Token | undefined = t;
  for (let i = 0; i < 10 && current?.alias; i++) {
    const next: string = current.alias;
    current = tokens.find((x) => x.name === next);
  }
  return String(current?.raw ?? '');
};

function Swatch({ t, showAlias = false }: { t: Token; showAlias?: boolean }) {
  return (
    <div className="swatch">
      <div className="swatch-chip" style={{ background: `var(${t.css})` }} />
      <div className="swatch-meta">
        <span className="p5-semibold">{t.name.split('/').slice(-1)[0]}</span>
        <span className="p6-regular swatch-sub">
          {showAlias && t.alias ? `→ ${t.alias}` : resolve(t)}
        </span>
      </div>
    </div>
  );
}

function Section({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="f-section">
      <h2 className="h3">{title}</h2>
      {note && <p className="p4-regular f-note">{note}</p>}
      {children}
    </section>
  );
}

export default function Foundations() {
  const core = byCollection('01-Core');
  const coreColors = core.filter((t) => t.name.startsWith('color/') && !t.name.startsWith('color/brand'));
  const families = [...new Set(coreColors.map((t) => t.name.split('/')[1]))];
  const brand = core.filter((t) => t.name.startsWith('color/brand'));
  const spacing = core.filter((t) => t.name.startsWith('spacing/'));
  const radius = core.filter((t) => t.name.startsWith('radius/'));
  const semantic = byCollection('02-Semantic');
  const semanticGroups = [...new Set(semantic.map((t) => t.name.split('/').slice(1, -1).join('/')))];
  const componentCollections = [...new Set(tokens.map((t) => t.collection))].filter(
    (c) => !['01-Core', '02-Semantic', 'Local'].includes(c)
  );

  return (
    <main className="foundations">
      <header className="f-header">
        <p className="p5-semibold f-eyebrow">FLUX DS · IN CODE</p>
        <h1 className="h1">Foundations</h1>
        <p className="p3-regular f-note">
          Generated from the Flux DS Figma variables ({tokens.length} tokens, {textStyles.length} text styles). Compare
          each block with the ❖ FOUNDATIONS page in Figma.
        </p>
      </header>

      <Section title="Brand colours">
        <div className="swatch-row">
          {brand.map((t) => (
            <Swatch key={t.name} t={t} showAlias />
          ))}
        </div>
      </Section>

      <Section title="Primitive colours" note="01-Core">
        {families.map((family) => (
          <div key={family} className="family">
            <h3 className="h6">{family}</h3>
            <div className="swatch-row">
              {coreColors
                .filter((t) => t.name.split('/')[1] === family)
                .map((t) => (
                  <Swatch key={t.name} t={t} />
                ))}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Semantic colours" note="02-Semantic — each one points to a primitive">
        {semanticGroups.map((group) => (
          <div key={group} className="family">
            <h3 className="h6">{group}</h3>
            <div className="swatch-row">
              {semantic
                .filter((t) => t.name.split('/').slice(1, -1).join('/') === group)
                .map((t) => (
                  <Swatch key={t.name} t={t} showAlias />
                ))}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Typography" note="Lexend · text styles">
        <div className="type-list">
          {textStyles.map((s) => (
            <div key={s.name} className="type-row">
              <span className="p5-regular type-meta">
                {s.name}
                <br />
                {s.size}/{s.lineHeight} · {s.weight}
              </span>
              <span className={s.className}>Commission and monitor your systems</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spacing">
        <div className="scale">
          {spacing.map((t) => (
            <div key={t.name} className="scale-row">
              <span className="p5-semibold scale-label">{t.name.split('/')[1]}</span>
              <span className="spacing-bar" style={{ width: `var(${t.css})` }} />
              <span className="p5-regular swatch-sub">{String(t.raw)}px</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Radius and elevation">
        <div className="swatch-row">
          {radius.map((t) => (
            <div key={t.name} className="radius-box" style={{ borderRadius: `var(${t.css})` }}>
              <span className="p5-semibold">{t.name.split('/')[1]}</span>
              <span className="p6-regular swatch-sub">{String(t.raw)}px</span>
            </div>
          ))}
          <div className="radius-box elevation">
            <span className="p5-semibold">elevation/card</span>
            <span className="p6-regular swatch-sub">0 4 12 · 8%</span>
          </div>
        </div>
      </Section>

      <Section title="Component tokens" note="03–12 · used by the components in the next step">
        {componentCollections.map((c) => (
          <details key={c} className="comp">
            <summary className="p3-semibold">
              {c} <span className="swatch-sub p5-regular">({byCollection(c).length})</span>
            </summary>
            <table className="p5-regular">
              <tbody>
                {byCollection(c).map((t) => (
                  <tr key={t.name}>
                    <td>
                      {resolve(t).startsWith('#') ? (
                        <span className="mini-chip" style={{ background: `var(${t.css})` }} />
                      ) : null}
                    </td>
                    <td>{t.name}</td>
                    <td className="swatch-sub">{t.alias ? `→ ${t.alias}` : String(t.raw)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        ))}
      </Section>
    </main>
  );
}
