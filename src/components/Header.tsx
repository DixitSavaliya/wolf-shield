import { useState } from 'react';
import { Logo } from './Logo';
import './Header.css';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'vision', label: 'Vision & Mission' },
  { id: 'products', label: 'Product Range' },
  { id: 'catalog', label: 'Product Catalog' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        <a href="#hero" className="header-logo" onClick={(e) => handleNavClick(e, 'hero')} aria-label="WOLF SHIELD Home">
          <Logo variant="full" />
        </a>

        <button
          type="button"
          className="header-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="header-toggle-bar" />
          <span className="header-toggle-bar" />
          <span className="header-toggle-bar" />
        </button>

        <nav id="nav-menu" className={`header-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <ul className="header-nav-list">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className="header-nav-link"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
