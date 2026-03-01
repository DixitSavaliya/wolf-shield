import './Certifications.css';

const CERTIFICATIONS = [
  {
    id: 'ce',
    image: '/images/certifications/ce-certified.png',
    title: 'Certified CE Company',
    description: 'European conformity marking for quality and safety standards.',
    alt: 'CE Certified Company badge',
  },
  {
    id: 'iso',
    image: '/images/certifications/iso-9001-2015.png',
    title: 'Certified ISO 9001:2015 Company',
    description: 'International quality management system certification.',
    alt: 'Certified ISO 9001:2015 Company badge',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="section certifications" aria-labelledby="cert-heading">
      <div className="certifications-bg" aria-hidden />
      <div className="container certifications-inner">
        <header className="certifications-header">
          <h2 id="cert-heading" className="certifications-title">Certifications</h2>
          <p className="certifications-subtitle">
            Our commitment to quality is backed by internationally recognized certifications.
          </p>
        </header>
        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert) => (
            <article key={cert.id} className="certifications-card" aria-labelledby={`cert-${cert.id}-title`}>
              <div className="certifications-badge-wrap">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="certifications-badge-img"
                  width={150}
                  height={150}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 id={`cert-${cert.id}-title`} className="certifications-card-title">{cert.title}</h3>
              <p className="certifications-card-desc">{cert.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
