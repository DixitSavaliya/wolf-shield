import { Logo } from '../components/Logo';
import './Footer.css';

const ADDRESS_LINES = ['Avadh Industrial Hub, Biliyala,', 'Rajkot, Gujarat. 360311.'];
const PHONES = ['+91 98797 31510', '99781 72829', '99781 52829'];
const EMAIL = 'wolfshield.india@gmail.com';

export function Footer() {
  return (
    <footer id="contact" className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo variant="full" />
        </div>
        <p className="footer-slogan">
          Adding Touch of Quality, We Care for Your Dreams
        </p>
        <div className="footer-contact">
          <p className="footer-mfg">Mfg. & Mktd. By: WOLF SHIELD</p>
          <address className="footer-address">
            {ADDRESS_LINES.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </address>
          <div className="footer-links">
            <a href={`tel:${PHONES[0].replace(/\s/g, '')}`} className="footer-link">
              {PHONES.join(' / ')}
            </a>
            <a href={`mailto:${EMAIL}`} className="footer-link">
              {EMAIL}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} WOLF SHIELD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
