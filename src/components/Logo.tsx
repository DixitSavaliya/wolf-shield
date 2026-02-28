import './Logo.css';

interface LogoProps {
  variant?: 'full' | 'icon';
  className?: string;
}

const buildingIcon = (
  <svg
    viewBox="0 0 120 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="logo-graphic"
    aria-hidden
  >
    {/* Foreground: two small house-like structures */}
    <path
      d="M24 56V32l12-8 12 8v24H24zm4-4h8V34l-4-2.67L28 34v18zm12 0h8V34l-4-2.67L40 34v18z"
      fill="#0c2340"
    />
    <path
      d="M44 56V36l10-6 10 6v20H44zm4-4h6V38l-3-2-3 2v14zm10 0h6V38l-3-2-3 2v14z"
      fill="#0c2340"
    />
    {/* Windows */}
    <rect x="28" y="38" width="4" height="4" rx="0.5" fill="#8B6914" />
    <rect x="36" y="38" width="4" height="4" rx="0.5" fill="#8B6914" />
    <rect x="48" y="42" width="3" height="3" rx="0.5" fill="#8B6914" />
    <rect x="54" y="42" width="3" height="3" rx="0.5" fill="#8B6914" />
    {/* Background: taller buildings / skyline */}
    <path
      d="M0 56V20h16v36H0zm4-4h8V24H4v28z"
      fill="#1a3a5c"
    />
    <path
      d="M68 56V8h14v48H68zm4-4h6V12h-6v40z"
      fill="#0c2340"
    />
    <path
      d="M84 56V16h12v40H84zm4-4h4V20h-4v32z"
      fill="#1a3a5c"
    />
    <path
      d="M98 56V28h10v28H98zm4-4h2V32h-2v20z"
      fill="#2d4a6a"
    />
    <path
      d="M110 56V12h10v44h-10zm4-4h2V16h-2v36z"
      fill="#0c2340"
    />
  </svg>
);

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  return (
    <div className={`logo ${className}`.trim()} role="img" aria-label="WOLF SHIELD">
      {variant === 'icon' ? (
        <div className="logo-icon-wrap">{buildingIcon}</div>
      ) : (
        <>
          <div className="logo-graphic-wrap">{buildingIcon}</div>
          <span className="logo-name">WOLF SHIELD</span>
          <span className="logo-tagline">Seal It Shield It.</span>
        </>
      )}
    </div>
  );
}
