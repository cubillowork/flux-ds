import { useEffect, useState } from 'react';
import Foundations from './pages/Foundations';
import Icons from './pages/Icons';
import './App.css';

const pages = {
  foundations: { label: 'Foundations', component: Foundations },
  icons: { label: 'Icons', component: Icons },
} as const;
type PageKey = keyof typeof pages;

const fromHash = (): PageKey => {
  const key = window.location.hash.replace('#/', '');
  return key in pages ? (key as PageKey) : 'foundations';
};

export default function App() {
  const [page, setPage] = useState<PageKey>(fromHash);
  useEffect(() => {
    const onHash = () => setPage(fromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const Page = pages[page].component;

  return (
    <>
      <nav className="ds-nav">
        <span className="h6">Flux DS</span>
        {(Object.keys(pages) as PageKey[]).map((k) => (
          <a key={k} href={`#/${k}`} className={`p4-semibold${k === page ? ' is-active' : ''}`}>
            {pages[k].label}
          </a>
        ))}
      </nav>
      <Page />
    </>
  );
}
