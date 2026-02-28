/**
 * WOLF SHIELD product catalog – exact content from catalogue.
 */

export interface PropertyRow {
  label: string;
  value: string;
}

export interface ProductBlock {
  heading: string;
  type: 'list' | 'table' | 'paragraph';
  items?: string[];
  table?: PropertyRow[];
  paragraph?: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  imageSlug?: string;
  blocks: ProductBlock[];
}

export const products: Product[] = [
  // --- SILVER C1T TYPE - 1 ---
  {
    id: 'silver-c1t',
    title: 'SILVER C1T TYPE - 1',
    subtitle: 'Polymer Modified Adhesive For Wall & Floor Tiles For Internal Use.',
    imageSlug: 'silver-c1t',
    blocks: [
      {
        heading: 'How To Use',
        type: 'paragraph',
        paragraph:
          'Add 4.5 ltr Water in 20 kg. WOLF SHIELD tile adhesive and make a mixture which can be used in 0.5 to 1 hour. Apply with a trowel, stick the tiles in 10 to 15 minutes, and fill the joint after 24 hours.',
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: ['+20 Kg'],
      },
      {
        heading: 'Suitable Substrate',
        type: 'list',
        items: [
          'Plaster',
          'AAC Block Surface',
          'Cement Base Surface',
          'RCC Surface',
          'Mosaic Tile Surface',
        ],
      },
      {
        heading: 'Properties',
        type: 'table',
        table: [
          { label: 'Appearance', value: 'Grey | White' },
          { label: 'Open Time', value: '20 min at 20°C' },
          { label: 'Pot Life', value: 'Approx 120 min' },
          { label: 'Shear Strength', value: '> 1.0 N/mm²' },
          { label: 'Tensile Strength', value: '> 0.5 N/mm²' },
          { label: 'Coverage (20kg Bag)', value: '4-5m² @ 3mm bed thickness' },
        ],
      },
      {
        heading: 'Area Of Application',
        type: 'list',
        items: [
          'Ceramic tile on internal & external floor',
          'Vitrified tiles on internal floor',
          'Highly porous tiles',
        ],
      },
    ],
  },
  // --- GOLD C2T TYPE - 2 ---
  {
    id: 'gold-c2t',
    title: 'GOLD C2T TYPE - 2',
    subtitle:
      'High Polymer Modified Adhesive For Vitrified wall & Floor Tiles, Tile on Tile Floor Granite For Window, Seals Internal Use.',
    imageSlug: 'gold-c2t',
    blocks: [
      {
        heading: 'How To Use',
        type: 'paragraph',
        paragraph:
          'Add 4.5 ltr Water in 20 kg. WOLF SHIELD tile adhesive and make a mixture which can be used in 0.5 to 1 hour. Apply with a trowel, stick the tiles in 10 to 15 minutes, and fill the joint after 24 hours.',
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: ['+20 Kg'],
      },
      {
        heading: 'Suitable Substrate',
        type: 'list',
        items: [
          'Cement mortar beds',
          'Cement based plaster',
          'Concrete surfaces',
          'Cement terrazzo',
          'Cement based self leveling screed',
          'Brick masonry',
          'Concrete block masonry',
          'AAC block masonry',
        ],
      },
      {
        heading: 'Properties',
        type: 'table',
        table: [
          { label: 'Appearance', value: 'Grey | White Powder' },
          { label: 'Open Time', value: '20 min at 20°C' },
          { label: 'Pot Life', value: 'Approx 120 min' },
          { label: 'Shear Strength', value: '> 1.25 N/mm²' },
          { label: 'Tensile Strength', value: '> 1.0 N/mm²' },
          { label: 'Coverage (20kg Bag)', value: '4-5m² @ 3mm bed thickness' },
        ],
      },
      {
        heading: 'Area Of Application',
        type: 'list',
        items: [
          'Vitrified tiles & glass mosaic tiles, natural stones',
          'Internal & external/vertical & horizontal surfaces',
        ],
      },
    ],
  },
  // --- PLATINUM C2TE TYPE - 3 ---
  {
    id: 'platinum-c2te',
    title: 'PLATINUM C2TE TYPE - 3',
    subtitle:
      'High Polymer Modified Adhesive For Big Size Vitrified & Granite & Marble on Wall & Floor Internal & External Use.',
    imageSlug: 'platinum-c2te',
    blocks: [
      {
        heading: 'Suitable Substrate',
        type: 'list',
        items: [
          'Cement mortar beds',
          'Brick/Block/Concrete Masonry',
          'Waterproofing products',
          'Cement based self-leveling screed',
          'Fibre cement slabs',
          'Cement based plaster/Concrete',
        ],
      },
      {
        heading: 'Properties',
        type: 'table',
        table: [
          { label: 'Appearance', value: 'Grey/White Powder' },
          { label: 'Open Time', value: '20 min at 20°C' },
          { label: 'Pot Life', value: 'Approx 120 min' },
          { label: 'Shear Strength', value: '> 1.5 N/mm²' },
          { label: 'Tensile Strength', value: '> 1.5 N/mm²' },
          { label: 'Coverage (20kg Bag)', value: '4-5m² @ 3mm bed thickness' },
        ],
      },
      {
        heading: 'How To Use',
        type: 'paragraph',
        paragraph:
          'Add 4.5 ltr. Water in 20 kg. WOLF SHIELD tile adhesive and make a mixture which can be used in 0.5 to 1 hour. Apply with a trowel, stick the tiles in 10 to 15 minutes, and fill the joint after 24 hours.',
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: ['20 Kg'],
      },
      {
        heading: 'Area Of Application',
        type: 'list',
        items: [
          'Large format Vitrified and mosaic tiles',
          'Granite, marble and all types of stones',
          'Internal & External / vertical & horizontal surfaces',
        ],
      },
    ],
  },
  // --- PLATINUM WHITE C2TES1 TYPE - 4 ---
  {
    id: 'platinum-white-c2tes1',
    title: 'PLATINUM WHITE C2TES1 TYPE - 4',
    subtitle:
      'High Polymer Modified Adhesive For Big Size Vitrified / Granite & Marble Or Wall Cladding & Flooring For Internal & External Use.',
    imageSlug: 'platinum-white',
    blocks: [
      {
        heading: 'Suitable Substrate',
        type: 'list',
        items: [
          'Cement based plaster/Concrete',
          'Brick/Block/Concrete Masonry',
          'Waterproofing product',
          'Cement based self-leveling screed',
          'Fibre cement slabs',
          'Thermal insulation paneling systems',
        ],
      },
      {
        heading: 'Properties',
        type: 'table',
        table: [
          { label: 'Appearance', value: 'Grey/White' },
          { label: 'Open Time', value: '20 min at 20°C' },
          { label: 'Pot Life', value: 'Approx 120 min' },
          { label: 'Shear Strength', value: '> 1.0 N/mm²' },
          { label: 'Tensile Strength', value: '> 0.5 N/mm²' },
          { label: 'Coverage (20kg Bag)', value: '4-5m² @ 3mm bed thickness' },
        ],
      },
      {
        heading: 'How To Use',
        type: 'paragraph',
        paragraph:
          'Add 4.5 ltr. Water in 20 kg. WOLF SHIELD tile adhesive and make a mixture which can be used in 0.5 to 1 hour. Apply with a trowel, stick the tiles in 10 to 15 minutes, and fill the joint after 24 hours.',
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: ['20 Kg'],
      },
      {
        heading: 'Area Of Application',
        type: 'list',
        items: [
          'Large format and glass mosaic tiles',
          'Marble, granite stones and laminated stoneware',
          'Plasterboard, fibre-cement sheet, concrete surfaces',
        ],
      },
    ],
  },
  // --- BLOCK JOINTING MORTAR ---
  {
    id: 'block-jointing-mortar',
    title: 'BLOCK JOINTING MORTAR',
    subtitle: 'Cement & Polymer Base',
    imageSlug: 'block-jointing',
    blocks: [
      {
        heading: 'Suitable Substrate',
        type: 'paragraph',
        paragraph:
          'Perfect combination of cement, graded sand & additives makes it unique. This makes mortar more compact, thinner & Strong. Interlocking hold of blocks and bricks makes tough.',
      },
      {
        heading: 'Properties',
        type: 'table',
        table: [
          { label: 'Appearance', value: 'Grey / White' },
          { label: 'Pot Life', value: 'Approx 120 min' },
          { label: 'Tensile Strength', value: '> 0.5 N/mm²' },
          { label: 'Coverage (20kg Bag)', value: '4-5m² @ 3mm bed thickness' },
        ],
      },
      {
        heading: 'How To Use',
        type: 'paragraph',
        paragraph:
          'Mix approx. 25 to 28% clean water in 40 kg powder & make a consistence workable paste & start applying to join blocks with the help of notch trowel to ensure good bonding. It will bond 40 blocks (900mm x 200m x 150mm) in 40 kg bag.',
      },
      {
        heading: 'Area Of Application',
        type: 'list',
        items: [
          'AAC blocks, joining works',
          'Stretcher block, corner block, pillar block works',
          'Red bricks',
        ],
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: ['40 Kg Bag'],
      },
    ],
  },
  // --- TILE GROUT ---
  {
    id: 'tile-grout',
    title: 'TILE GROUT',
    subtitle: 'Stainfree Grout For Walls & Floor',
    imageSlug: 'tile-grout',
    blocks: [
      {
        heading: 'Features & Benefits',
        type: 'list',
        items: [
          'Easy to use & clean - just mix with water, ready to use',
          'Polymer modified - crack-free, minimum shrinkage & water resistance',
          'Suitable for varied tile and stones',
        ],
      },
      {
        heading: 'Properties',
        type: 'table',
        table: [
          { label: 'Colour Available', value: '20 Shades' },
          { label: 'Mixing Ratio', value: '1kg Tile Grout : 0.33-0.40 kg Water' },
          { label: 'Pot Life', value: '3 hrs @ 30°C' },
          { label: 'Joint Width', value: 'Up to 5 mm' },
          { label: 'Water Absorption', value: 'Nil' },
        ],
      },
      {
        heading: 'How To Use',
        type: 'paragraph',
        paragraph:
          'Add water as per requirement in 1 kg. Tile grout and mix slowly, then wipe, the tiles with dry cloth, then apply the paste to the joint using a trowel and let it dry for 24 hours, wipe with a damp sponge around the tiles.',
      },
      {
        heading: 'Area Of Application',
        type: 'list',
        items: [
          'Joint fitting in floor & wall tiles for both internal & external areas.',
        ],
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: ['1 kg'],
      },
    ],
  },
  // --- SBR - SUPER LATEX ---
  {
    id: 'sbr-super-latex',
    title: 'SBR - SUPER LATEX',
    subtitle: 'SBR Latex For Water Proofing And Repair',
    imageSlug: 'sbr-super-latex',
    blocks: [
      {
        heading: 'Dosage',
        type: 'list',
        items: [
          'Waterproofing SBR Cement = 1:2 (by weight)',
          'Bonding Coat - SBR Cement = 1:1.5 (by weight)',
          'Repair Mortar - Cement : 50 kg, Washed Sand : 150 kg, SBR : 4-5 kg, Water : 16-17 ltr.',
        ],
      },
      {
        heading: 'Properties',
        type: 'table',
        table: [
          { label: 'Appearance', value: 'Milky White Liquid' },
          { label: 'Sp. gr. @ 25°C', value: '1.01 - 1.03' },
          { label: 'PH Value', value: '7 to 9' },
          { label: 'Solid Content', value: '32 to 36%' },
        ],
      },
      {
        heading: 'Features & Benefits',
        type: 'list',
        items: ['Crack Prevention', 'Improves Hardness', 'Reduces Shrinkage', 'Bonding'],
      },
      {
        heading: 'Area Of Application',
        type: 'paragraph',
        paragraph:
          'Waterproofing of small roof terraces, sunken portions of toilet & bathrooms, chajjas & lift pits, balconies & stair cases Liquid & effluent tanks, car deck and walk ways repairs of plaster cracks more than 5mm & in gaps developed between masonry and RCC members.',
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: ['500ml', '1', '5', '10', '20', '50 & 200 ltr.'],
      },
    ],
  },
  // --- LWP - TONIC FOR CEMENT ---
  {
    id: 'lwp-tonic',
    title: 'LWP - TONIC FOR CEMENT',
    subtitle: 'Integral Liquid Waterproofing Compound For Plaster & Concrete',
    imageSlug: 'lwp-tonic',
    blocks: [
      {
        heading: 'Dosage',
        type: 'list',
        items: [
          'Waterproofing - LWP : Cement = 1:2 (by weight)',
          'Bonding Coat - LWP : Cement = 1:1.5 (by weight)',
          'Repair Mortar - Cement : 50 kg, Washed Sand : 150 kg, LWP : 4-5 kg, Water : 16-17 ltr.',
        ],
      },
      {
        heading: 'Properties',
        type: 'table',
        table: [
          { label: 'Appearance', value: 'Milky White Liquid' },
          { label: 'Sp. gr. @ 25°C', value: '1.01 - 1.05' },
          { label: 'PH Value', value: '7 to 10' },
          { label: 'Solid Content', value: '42 to 46%' },
        ],
      },
      {
        heading: 'How To Use',
        type: 'list',
        items: [
          'Easy to application as it is one component',
          'It prevents cracking by improving flexural strength',
          'Reduces drying & aging shrinking cracks which ultimately decrease permeability',
          'Excellent bond to concrete, masonry, stone work, plasters, steel, asphalt & most of the building materials.',
        ],
      },
      {
        heading: 'Area Of Application',
        type: 'paragraph',
        paragraph:
          'Repair of cracks and waterproof plastering for masonry structures and prevents leakage & dampness liquid & effluent tanks, car deck and walk ways repair work masonry and RCC members.',
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: ['500ml', '1', '5', '10', '20', '50 & 200 ltr.'],
      },
    ],
  },
  // --- BLOCK HARDNER ---
  {
    id: 'block-hardner',
    title: 'BLOCK HARDNER',
    subtitle: 'SBR Latex For Water Proofing And Repair',
    imageSlug: 'block-hardner',
    blocks: [
      {
        heading: 'Features & Benefits',
        type: 'list',
        items: [
          'Concrete Accelerator',
          'Easy & Early Mould Release',
          'Smooth and Glossy Surface Finish',
        ],
      },
      {
        heading: 'Properties',
        type: 'table',
        table: [
          { label: 'Appearance', value: 'Light Brown Liquid' },
          { label: 'Sp. Gravity', value: '1.35 to 1.37' },
          { label: 'PH value', value: '7 to 9' },
          { label: 'Chloride Contents', value: 'Nil' },
        ],
      },
      {
        heading: 'Area Of Application',
        type: 'list',
        items: [
          'Slip-formed concrete',
          'Gives Better Finish to surface',
          'AAC Blocks',
          'Ready-mixed concrete where minimum time delays are critical',
          'Precast Concrete',
        ],
      },
      {
        heading: 'How To Use',
        type: 'paragraph',
        paragraph:
          'The Recommended dosage as per guidance is 0.6 to 2% of cementitious Content.',
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: ['10, 20, 50 & 250 kg Pack'],
      },
    ],
  },
  // --- TILE SPACER ---
  {
    id: 'tile-spacer',
    title: 'TILE SPACER',
    subtitle: '',
    imageSlug: 'tile-spacer',
    blocks: [
      {
        heading: 'Features & Benefits',
        type: 'list',
        items: [
          'To keep the tiles at equal distance & create even grout lines.',
          'Ability to change individual tiles without damaging adjacent tiles.',
          'Less effort & time with smoother installation',
        ],
      },
      {
        heading: 'Area Of Application',
        type: 'list',
        items: [
          'For giving gap between tile during tile fixing. Enables the floor/ wall tiles to have straight and even grout spacing.',
        ],
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: ['2, 3, 4, 5, 6, 8, 10mm (100 Pcs/Per Packet)'],
      },
    ],
  },
  // --- TILE CLEANER ---
  {
    id: 'tile-cleaner',
    title: 'TILE CLEANER',
    subtitle: '100% Stain Free',
    imageSlug: 'tile-cleaner',
    blocks: [
      {
        heading: 'Features & Benefits',
        type: 'list',
        items: [
          'Removes difficult stain easily - Fast & effective.',
          'Not harmful like acid',
          'Protects the color & shine of tiles.',
          'Rapid Action',
        ],
      },
      {
        heading: 'Properties',
        type: 'table',
        table: [
          { label: 'Appearance', value: 'White Liquid' },
          { label: 'PH Value', value: '2 to 6' },
          { label: 'Specific Gravity', value: '1.04 to 1.06' },
          { label: 'Chemical Resistance', value: 'Yes' },
        ],
      },
      {
        heading: 'How To Use',
        type: 'list',
        items: [
          'Tile Cleaner: Spread the tiles cleaner all over the surface, rub and clean thoroughly with a clean trowel.',
        ],
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: ['1, 5, 10, 20 & 50 Ltr Pack'],
      },
      {
        heading: 'Area Of Application',
        type: 'list',
        items: [
          'Walls, Floors, Interiors, Exterior, Dry and Wet Areas, Showers, Swimming Pools.',
        ],
      },
    ],
  },
  // --- EPOXY GROUT ---
  {
    id: 'epoxy-grout',
    title: 'EPOXY GROUT',
    subtitle: '100% Stain Free',
    imageSlug: 'epoxy-grout',
    blocks: [
      {
        heading: 'Features & Benefits',
        type: 'list',
        items: [
          'Wide Range of Colors',
          'Water Resistance',
          'Ready to use',
          'Acid Resistance',
          'Crack Free',
          'Shrink Free',
        ],
      },
      {
        heading: 'Properties',
        type: 'table',
        table: [
          { label: 'Initial Setting Time', value: '180-210 Mins' },
          { label: 'Shrinkage at 7 Days', value: '<0.10%' },
          { label: 'Flexural Strength', value: '36-40 N/mm' },
          { label: 'Shrinkage', value: '0.6-0.8 mm/m' },
          { label: 'Water Absorption', value: '0.015-0.040 g' },
        ],
      },
      {
        heading: 'Pack Size',
        type: 'list',
        items: [
          '1kg - Resin 200 ml, Hardener 100 ml, Filler Powder 700 gm.',
          '5kg - Resin 1 Lt, Hardener 500 ml, Filler Powder 3500 gm.',
        ],
      },
      {
        heading: 'Area Of Application',
        type: 'list',
        items: [
          'Grouting of all kinds of tiles & stone on wall & floor, Internal & External',
          'For Tiles Joints of Width 2mm - 10mm',
          'Available in Multiple Attractive Colours',
        ],
      },
    ],
  },
];
