import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CatalogSlider } from '../components/CatalogSlider';
import './ProductCatalog.css';

export function ProductCatalog() {
  return (
    <section
      id="catalog"
      className="section product-catalog"
      aria-labelledby="catalog-heading"
    >
      <div className="container">
        <h2 id="catalog-heading" className="product-catalog-title">
          Product Catalog
        </h2>
        <p className="product-catalog-intro">
          Detailed specifications and application information for WOLF SHIELD construction chemical products.
        </p>

        <div className="product-catalog-slider-wrap">
          <CatalogSlider />
        </div>

        <div className="product-catalog-browse">
          <h3 id="browse-heading" className="product-catalog-browse-title">
            Browse by product
          </h3>
          <nav className="product-catalog-nav" aria-labelledby="browse-heading">
            <ul className="product-catalog-nav-list">
              {products.map((p) => (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    className="product-catalog-nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="product-catalog-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
