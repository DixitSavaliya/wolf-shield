import { useState } from 'react';
import type { Product, ProductBlock } from '../data/products';
import './ProductCard.css';

/** Product images live in public/images/products/{imageSlug}.png */
function getProductImageSrc(imageSlug: string): string {
  return `/images/products/${imageSlug}.png`;
}

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
  const imageSlug = product.imageSlug;
  const src = imageSlug ? getProductImageSrc(imageSlug) : '';
  const [failed, setFailed] = useState(false);

  const handleError = () => setFailed(true);

  if (!imageSlug || !src || failed) {
    return (
      <div className="product-card-placeholder is-visible">
        <span>WOLF SHIELD</span>
        <span>{product.title.split(' ')[0]}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden
      className="product-card-img"
      onError={handleError}
      loading="lazy"
      decoding="async"
    />
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
