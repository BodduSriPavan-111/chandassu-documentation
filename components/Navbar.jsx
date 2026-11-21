'use client';

import Link from 'next/link';
import { useState } from 'react';

const LINKS = [
  { id: 'home', href: '/#home', label: 'Home' },
  { id: 'docs', href: '/docs', label: 'Getting Started' },
  { id: 'research', href: '/#research', label: 'Research' },
  { id: 'contribute', href: '/#contribute', label: 'Contribute' },
  { id: 'journey', href: '/our-journey', label: 'Our Journey' }
];

const SOCIAL = [
  { href: 'https://github.com/BodduSriPavan-111/chandassu', icon: 'fab fa-github' },
  { href: 'https://pypi.org', icon: 'fab fa-python' },
  { href: 'https://discord.com', icon: 'fab fa-discord' }
];

export default function Navbar({ solid = false, activeId = null }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar${solid ? ' scrolled' : ''}`}>
      <div className="logo">Chandassu - The Metrical Poetry</div>

      <ul className={`nav-menu${open ? ' active' : ''}`}>
        {LINKS.map((l) => (
          <li key={l.id}>
            <Link
              href={l.href}
              className={`nav-link${activeId === l.id ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li className="desktop-social">
          {SOCIAL.map((s) => (
            <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer">
              <i className={s.icon}></i>
            </a>
          ))}
        </li>
      </ul>

      <div className={`hamburger${open ? ' active' : ''}`} onClick={() => setOpen((o) => !o)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
