'use client'

import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@/assets/icons/menu';
import CloseIcon from '@/assets/icons/close';

const ROUTES = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'About',
    route: '/about',
  },
  {
    name: 'Contact',
    route: '/contact',
  },
] as const; 

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative w-full flex items-center justify-end flex-wrap gap-12 p-5 bg-[var(--background)] sm:justify-center">
      {ROUTES.map((r) => (
        <Link key={`nav-link-${r.name}`} className="hidden sm:block" href={r.route}>{r.name}</Link>
      ))}
      <button className="sm:hidden" aria-label="toggle menu" onClick={() => setMenuOpen(prev => !prev)}>
        {isMenuOpen
          ? <CloseIcon className="w-6" />
          : <MenuIcon className="w-6" />
        }
      </button>
      <div className={`absolute left-0 top-16 w-full flex flex-col items-center transition-transform bg-[var(--background)] sm:hidden ${isMenuOpen ? 'translate-y-0 z-50 shadow-2xl' : '-translate-y-full -z-50'}`}>
        {ROUTES.map((r) => (
          <Link
            key={`nav-link-${r.name}`}
            className="w-full p-6 text-center hover:bg-[var(--alt-bg)]"
            href={r.route}
            onClick={() => setMenuOpen(false)}
          >
            {r.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavBar;
