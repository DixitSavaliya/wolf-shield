import './VisionMission.css';

export function VisionMission() {
  return (
    <section id="vision" className="section vision-mission" aria-labelledby="vision-heading">
      <div className="container">
        <h2 id="vision-heading" className="section-title">Vision & Mission</h2>
        <div className="vision-mission-grid">
          <article className="vision-mission-card" aria-labelledby="vision-title">
            <h3 id="vision-title" className="vision-mission-title">Vision</h3>
            <p className="vision-mission-text">
              To develop, manufacture, and supply innovative construction materials and chemicals that enhance productivity, workability, and durability, contributing to sustainable and long-lasting infrastructure development.
            </p>
          </article>
          <article className="vision-mission-card" aria-labelledby="mission-title">
            <h3 id="mission-title" className="vision-mission-title">Mission</h3>
            <p className="vision-mission-text">
              To establish a pan-India multi-location manufacturing and distribution network, and to become a trusted leader in tile adhesives and construction chemical solutions through quality, innovation, and customer satisfaction.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
