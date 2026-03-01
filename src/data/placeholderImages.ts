/**
 * Placeholder image URLs for hero and catalog slider only.
 * Product cards use real images from public/images/products/.
 */

const BASE = 'https://placehold.co';
const BG = '0c2340';
const FG = 'ffffff';

export const placeholderImages = {
  /** Hero section – construction / quality */
  hero: `${BASE}/640x400/${BG}/${FG}?text=WOLF+SHIELD+Construction+Solutions&font=serif`,
  /** Catalog slider – one per slide (6 slides) */
  catalogSlide: (n: number) =>
    `${BASE}/800x1000/${BG}/${FG}?text=Catalog+Page+${n}&font=serif`,
};
