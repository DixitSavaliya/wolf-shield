import './Logo.css';

interface LogoProps {
  variant?: 'full' | 'icon';
  className?: string;
}

const LOGO_SRC = '/logo.png';

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  return (
    <div className={`logo logo--${variant} ${className}`.trim()} role="img" aria-label="WOLF SHIELD - Seal It Shield It.">
      <img
        src={LOGO_SRC}
        alt="WOLF SHIELD - Seal It Shield It."
        className="logo-img"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
