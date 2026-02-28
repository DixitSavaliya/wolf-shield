import './About.css';

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-header">
          <h2 id="about-heading" className="about-badge">About Us</h2>
          <div className="about-logo-wrap">
            <img
              src="/images/about-logo.png"
              alt=""
              aria-hidden
              className="about-logo-img"
              onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
            />
          </div>
        </div>

        <div className="about-content">
          <p className="about-lead">
            WOLFSHIELD is a forward-driven construction chemicals brand, built with the vision to <strong>seal it right</strong> and <strong>shield it strong</strong>. Rooted in the strength of cement and advanced construction technology, WOLFSHIELD is committed to serving the construction industry with high-performance, reliable, and innovative solutions.
          </p>
          <p>
            We specialize in developing and supplying customized construction chemical solutions for a wide range of residential, commercial, and infrastructure projects. Our products are designed to deliver exceptional bonding strength, durability, and long-term protection, supported by strong technical expertise and customer-focused service.
          </p>
          <p>
            WOLFSHIELD offers a comprehensive range of products including Tile Adhesives, Ready Mix Mortars, Waterproofing Chemicals, Engineering Grouts, Epoxy Grouts, Floor Hardeners, and Specialty Repair Chemicals. Each product is formulated using carefully selected raw materials and strict quality control standards to ensure consistent performance on site.
          </p>
        </div>
      </div>
    </section>
  );
}
