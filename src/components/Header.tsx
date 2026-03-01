import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const mobileMenu = (
    <div className={`header-mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
      {menuOpen && (
        <div
          className="header-backdrop"
          aria-hidden
          onClick={() => setMenuOpen(false)}
        />
      )}
      <nav
        id="nav-menu"
        className={`header-nav header-nav-mobile ${menuOpen ? 'is-open' : ''}`}
        aria-label="Main navigation"
      >
        <div className="header-nav-top">
          <span className="header-nav-title">Menu</span>
          <button
            type="button"
            className="header-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <span className="header-close-icon" aria-hidden>×</span>
          </button>
        </div>
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
  );

  return (
    <>
      <header className={`header ${menuOpen ? 'header--menu-open' : ''}`} role="banner">
        <div className="container header-inner">
          <a href="#hero" className="header-logo" onClick={(e) => handleNavClick(e, 'hero')} aria-label="WOLF SHIELD Home">
            <Logo variant="full" />
          </a>

          <div className="header-right">
            <button
              type="button"
              className={`header-toggle ${menuOpen ? 'header-toggle--open' : ''}`}
              aria-expanded={menuOpen}
              aria-controls="nav-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="header-toggle-bar" />
              <span className="header-toggle-bar" />
              <span className="header-toggle-bar" />
            </button>
            {/* Desktop nav – in header, visible only from 900px */}
            <nav className="header-nav header-nav-desktop" aria-label="Main navigation">
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
        </div>
      </header>

      {/* Mobile sidebar + backdrop in body so not clipped by header overflow */}
      {typeof document !== 'undefined' && createPortal(mobileMenu, document.body)}
    </>
  );
}
