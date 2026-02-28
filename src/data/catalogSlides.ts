/**
 * Catalog slider: one slide per catalog page image.
 * Add your 6 catalog screenshot images to public/images/catalog-pages/
 * as 1.png, 2.png, 3.png, 4.png, 5.png, 6.png (or .jpg)
 */

export interface CatalogSlide {
  id: string;
  index: number;
  title: string;
  products: string[];
  /** Path without extension - try .png then .jpg */
  imageBase: string;
}

export const catalogSlides: CatalogSlide[] = [
  {
    id: 'slide-1',
    index: 1,
    title: 'Tile Adhesives – Silver & Gold',
    products: ['SILVER C1T TYPE - 1', 'GOLD C2T TYPE - 2'],
    imageBase: '/images/catalog-pages/1',
  },
  {
    id: 'slide-2',
    index: 2,
    title: 'Block Jointing Mortar & Tile Grout',
    products: ['BLOCK JOINTING MORTAR', 'TILE GROUT'],
    imageBase: '/images/catalog-pages/2',
  },
  {
    id: 'slide-3',
    index: 3,
    title: 'Tile Adhesives – Platinum',
    products: ['PLATINUM C2TE TYPE - 3', 'PLATINUM WHITE C2TES1 TYPE - 4'],
    imageBase: '/images/catalog-pages/3',
  },
  {
    id: 'slide-4',
    index: 4,
    title: 'Waterproofing – SBR & LWP',
    products: ['SBR - SUPER LATEX', 'LWP - TONIC FOR CEMENT'],
    imageBase: '/images/catalog-pages/4',
  },
  {
    id: 'slide-5',
    index: 5,
    title: 'Block Hardner & Tile Spacer',
    products: ['BLOCK HARDNER', 'TILE SPACER'],
    imageBase: '/images/catalog-pages/5',
  },
  {
    id: 'slide-6',
    index: 6,
    title: 'Tile Cleaner & Epoxy Grout',
    products: ['TILE CLEANER', 'EPOXY GROUT'],
    imageBase: '/images/catalog-pages/6',
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
