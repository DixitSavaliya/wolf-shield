import './Certifications.css';

const CERTIFICATIONS = [
  { id: 'ce', badge: 'CE', title: 'Certified CE Company', description: 'European conformity marking for quality and safety standards.' },
  { id: 'iso', badge: 'ISO 9001:2015', title: 'Certified ISO 9001:2015 Company', description: 'International quality management system certification.' },
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
                <div className="certifications-badge" aria-hidden>
                  <span className="certifications-badge-text">{cert.badge}</span>
                </div>
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
