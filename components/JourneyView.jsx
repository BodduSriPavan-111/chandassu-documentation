'use client';

import Link from 'next/link';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { asset } from '@/lib/asset';
import { JOURNEY, PAL, PEOPLE } from '@/data/journey';

const BATCH = 3;

function Avatar({ p }) {
  const [failed, setFailed] = useState(false);
  return (
    <i className="av">
      {p.i}
      {!failed && <img src={asset(p.img)} alt={p.n} onError={() => setFailed(true)} />}
    </i>
  );
}

function Who({ id }) {
  const p = PEOPLE[id];
  const inner = (
    <>
      <Avatar p={p} />
      <span>
        <b>{p.n}</b>
        <em>{p.r}</em>
      </span>
      {p.url && <i className="fa-brands fa-linkedin li"></i>}
    </>
  );
  return p.url ? (
    <a className="who" href={p.url} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <div className="who">{inner}</div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18 18 6M8 6h10v10" />
    </svg>
  );
}

function Row({ index, entry, revealed, onReveal, rowRef }) {
  const ref = useRef(null);
  const p = PAL[index % PAL.length];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      onReveal(index);
      return;
    }
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            onReveal(index);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index, onReveal]);

  return (
    <article
      className={`row${revealed ? ' in' : ''}`}
      ref={(el) => {
        ref.current = el;
        rowRef(index, el);
      }}
      style={{ '--c': p.c, '--t': p.t, '--b': p.b || p.c, transitionDelay: `${(index % BATCH) * 120}ms` }}
    >
      <time className="lab">{entry.d}</time>
      <div className={`card${entry.a ? ' has-go' : ''}`}>
        <h3>{entry.t}</h3>
        <p>{entry.s}</p>
        {entry.k && (
          <div className="stats">
            {entry.k.map(([n, l]) => (
              <div className="stat" key={l}>
                <b>{n}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        )}
        {entry.x && <div className="note">{entry.x}</div>}
        {entry.w && (
          <div className="crew">
            {entry.w.map((k) => (
              <Who key={k} id={k} />
            ))}
          </div>
        )}
        {entry.a && (
          <a className="go" href={entry.a[0]} target="_blank" rel="noopener noreferrer" aria-label={entry.a[1]}>
            <Arrow />
          </a>
        )}
      </div>
    </article>
  );
}

export default function JourneyView() {
  const [shown, setShown] = useState(BATCH);
  const [revealed, setRevealed] = useState(() => new Set());
  const rows = useRef({});
  const conns = useRef({});

  const onReveal = useCallback((i) => {
    setRevealed((s) => (s.has(i) ? s : new Set(s).add(i)));
  }, []);

  const setRow = useCallback((i, el) => {
    if (el) rows.current[i] = el;
    else delete rows.current[i];
  }, []);

  const link = useCallback(() => {
    for (let i = 0; i < shown - 1; i++) {
      const r = rows.current[i];
      const nx = rows.current[i + 1];
      const c = conns.current[i];
      if (!r || !nx || !c) continue;
      const a = r.querySelector('.card');
      const b = nx.querySelector('.card');
      const t = parseFloat(getComputedStyle(c).borderTopWidth);
      const ya = r.offsetTop + a.offsetTop + a.offsetHeight / 2;
      const yb = nx.offsetTop + b.offsetTop + b.offsetHeight / 2;
      c.style.left = r.offsetLeft + a.offsetLeft + a.offsetWidth + 2 + 'px';
      c.style.top = ya - t / 2 + 'px';
      c.style.height = yb - ya + t + 'px';
    }
  }, [shown]);

  useLayoutEffect(() => {
    link();
  }, [link, revealed]);

  useEffect(() => {
    window.addEventListener('resize', link);
    window.addEventListener('load', link);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(link);
    return () => {
      window.removeEventListener('resize', link);
      window.removeEventListener('load', link);
    };
  }, [link]);

  const visible = JOURNEY.slice(0, shown);

  return (
    <div className="page-journey">
      <Navbar solid activeId="journey" />

      <header
        className="hero"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, .14), rgba(0, 0, 0, .26)), url("${asset('Our_Journey.jpg')}") center / cover no-repeat, linear-gradient(135deg, #01a33c, #9c6500)`
        }}
      >
        <h1>Our Journey</h1>
        <Link className="cue" href="#timeline" aria-label="Scroll down">
          <i className="fa-solid fa-chevron-down"></i>
        </Link>
        <span className="credit">© 9 October 2022&nbsp;&nbsp;Captured by Boddu Sri Pavan&nbsp;&nbsp;|&nbsp;&nbsp;CC BY 4.0</span>
      </header>

      <section className="timeline" id="timeline">
        <div className="wrap">
          <div className="head"></div>
        </div>

        <div id="list">
          {visible.map((e, i) => (
            <Row key={e.d} index={i} entry={e} revealed={revealed.has(i)} onReveal={onReveal} rowRef={setRow} />
          ))}
          {visible.slice(0, -1).map((_, i) => (
            <i
              key={`c${i}`}
              className={`conn${revealed.has(i + 1) ? ' in' : ''}`}
              ref={(el) => {
                if (el) conns.current[i] = el;
              }}
            ></i>
          ))}
        </div>

        <div className="wrap">
          <button className="more" hidden={shown >= JOURNEY.length} onClick={() => setShown((s) => s + BATCH)}>
            Explore more <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </section>

      <Footer variant="journey" />
    </div>
  );
}
