import './ProductRange.css';

const PRODUCTS = [
  'Tile & Stone Adhesives',
  'Epoxy Grouts',
  'Engineering Grouts',
  'Waterproofing Chemicals',
  'Floor Hardeners',
  'Ready Mix Plasters & Mortars',
  'White Cement & Specialty Products',
  'Application Tools',
];

export function ProductRange() {
  return (
    <section id="products" className="section product-range" aria-labelledby="products-heading">
      <div className="container">
        <h2 id="products-heading" className="product-range-title">
          <span className="product-range-line" aria-hidden />
          Our Product Range
          <span className="product-range-line" aria-hidden />
        </h2>
        <ul className="product-range-list">
          {PRODUCTS.map((name) => (
            <li key={name} className="product-range-item">
              <span className="product-range-icon" aria-hidden />
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <p className="product-range-cta">
          <a
            href="#catalog"
            className="product-range-cta-link"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View full product catalog with specifications &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
