/**
 * Dummy/placeholder image URLs for the whole site until real images are added.
 * Uses placehold.co for consistent, visible placeholders.
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
  /** Product card thumbnails */
  productCard: (label: string) =>
    `${BASE}/320x320/${BG}/${FG}?text=${encodeURIComponent(label)}&font=serif`,
};
