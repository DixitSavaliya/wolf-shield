import { useState } from 'react';
import type { Product, ProductBlock } from '../data/products';
import { productToCatalogPage } from '../data/catalogSlides';
import { placeholderImages } from '../data/placeholderImages';
import './ProductCard.css';

function BlockContent({ block }: { block: ProductBlock }) {
  if (block.type === 'list' && block.items?.length) {
    return (
      <ul className="product-card-list">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === 'table' && block.table?.length) {
    return (
      <div className="product-card-table-wrap">
        <table className="product-card-table">
          <tbody>
            {block.table.map((row, i) => (
              <tr key={i}>
                <th scope="row">{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.type === 'paragraph' && block.paragraph) {
    return <p className="product-card-para">{block.paragraph}</p>;
  }
  return null;
}

interface ProductCardProps {
  product: Product;
}

function ProductCardImage({ product }: { product: Product }) {
  const pageNum = productToCatalogPage[product.id];
  const catalogBase = pageNum ? `/images/catalog-pages/${pageNum}` : null;
  const singleImg = product.imageSlug ? `/images/catalog/${product.imageSlug}.jpg` : null;
  const [src, setSrc] = useState(() => catalogBase ? `${catalogBase}.png` : singleImg ?? '');
  const [useDummy, setUseDummy] = useState(false);

  const dummySrc = placeholderImages.productCard(product.title.split(' ')[0] || 'Product');

  const handleError = () => {
    if (src.endsWith('.png') && catalogBase) {
      setSrc(`${catalogBase}.jpg`);
    } else if (!useDummy) {
      setSrc(dummySrc);
      setUseDummy(true);
    } else {
      setSrc('');
    }
  };

  if (!src) {
    return (
      <div className="product-card-placeholder is-visible">
        <span>WOLF SHIELD</span>
        <span>{product.title.split(' ')[0]}</span>
      </div>
    );
  }

  return (
    <>
      <img
        src={src}
        alt=""
        aria-hidden
        className="product-card-img"
        onError={handleError}
      />
      <div className="product-card-placeholder" aria-hidden>
        <span>WOLF SHIELD</span>
        <span>{product.title.split(' ')[0]}</span>
      </div>
    </>
  );
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      id={product.id}
      className="product-card"
      aria-labelledby={`${product.id}-title`}
    >
      <div className="product-card-header">
        <div className="product-card-visual">
          <ProductCardImage product={product} />
        </div>
        <div className="product-card-titles">
          <h3 id={`${product.id}-title`} className="product-card-title">
            {product.title}
          </h3>
          {product.subtitle ? (
            <p className="product-card-subtitle">{product.subtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="product-card-body">
        {product.blocks.map((block, i) => (
          <div key={i} className="product-card-block">
            <h4 className="product-card-block-heading">{block.heading}</h4>
            <div className="product-card-block-content">
              <BlockContent block={block} />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
