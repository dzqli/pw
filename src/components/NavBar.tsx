// NavBar.tsx
import Link from 'next/link';

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
    name: 'Timeline',
    route: '/timeline',
  },
  {
    name: 'Contact',
    route: '/contact',
  },
] as const; 

const NavBar = () => {
  return (
    <nav className="w-full flex fixed items-center justify-center flex-wrap gap-12 p-6">
      {ROUTES.map((r) => (
        <Link key={`nav-link-${r.name}`} href={r.route}>{r.name}</Link>
      ))}
    </nav>
  )
}

export default NavBar;
