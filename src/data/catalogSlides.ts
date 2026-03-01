/**
 * Catalog slider: one slide per product group.
 * Uses product images from public/images/products/.
 */

export interface CatalogSlide {
  id: string;
  index: number;
  title: string;
  products: string[];
  /** Image path without extension - uses .png from public/images/products */
  imageBase: string;
}

export const catalogSlides: CatalogSlide[] = [
  {
    id: 'slide-1',
    index: 1,
    title: 'Tile Adhesives – Silver & Gold',
    products: ['SILVER C1T TYPE - 1', 'GOLD C2T TYPE - 2'],
    imageBase: '/images/products/gold-c2t',
  },
  {
    id: 'slide-2',
    index: 2,
    title: 'Block Jointing Mortar & Tile Grout',
    products: ['BLOCK JOINTING MORTAR', 'TILE GROUT'],
    imageBase: '/images/products/block-jointing',
  },
  {
    id: 'slide-3',
    index: 3,
    title: 'Tile Adhesives – Platinum',
    products: ['PLATINUM C2TE TYPE - 3', 'PLATINUM WHITE C2TES1 TYPE - 4'],
    imageBase: '/images/products/platinum-c2te',
  },
  {
    id: 'slide-4',
    index: 4,
    title: 'Waterproofing – SBR & LWP',
    products: ['SBR - SUPER LATEX', 'LWP - TONIC FOR CEMENT'],
    imageBase: '/images/products/sbr-super-latex',
  },
  {
    id: 'slide-5',
    index: 5,
    title: 'Block Hardner & Tile Spacer',
    products: ['BLOCK HARDNER', 'TILE SPACER'],
    imageBase: '/images/products/block-hardner',
  },
  {
    id: 'slide-6',
    index: 6,
    title: 'Tile Cleaner & Epoxy Grout',
    products: ['TILE CLEANER', 'EPOXY GROUT'],
    imageBase: '/images/products/epoxy-grout',
  },
];

/** Product id -> catalog slide index (1–6) for showing the right page image on product card */
export const productToCatalogPage: Record<string, number> = {
  'silver-c1t': 1,
  'gold-c2t': 1,
  'block-jointing-mortar': 2,
  'tile-grout': 2,
  'platinum-c2te': 3,
  'platinum-white-c2tes1': 3,
  'sbr-super-latex': 4,
  'lwp-tonic': 4,
  'block-hardner': 5,
  'tile-spacer': 5,
  'tile-cleaner': 6,
  'epoxy-grout': 6,
};
