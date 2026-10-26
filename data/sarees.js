/**
 * Noolu Saree Master Catalog
 * Featuring curated Ilkal, Cotton, and Silk weaves.
 * Every piece has an authentic SKU/Product ID for Excel compatibility.
 */
const NOOLU_CATALOG = [
  {
    id: "NLU-ILK-001",
    name: "Chandrakala Ilkal Silk-Cotton Saree",
    tagline: "Timeless black drape with traditional Tope Teni red pallu and Kasuti border",
    category: "ilkal",
    fabric: "Silk-Cotton Blend",
    loom: "Handloom",
    price: 3450,
    originalPrice: 4200,
    stock: 3,
    featured: true,
    badge: "Bestseller",
    colors: [
      {
        name: "Chandrakala Black & Crimson",
        hex: "#1A1A1A",
        secondaryHex: "#7E1C2B",
        images: [
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        name: "Royal Peacock Blue & Gold",
        hex: "#0E3B43",
        secondaryHex: "#C5A059",
        images: [
          "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
        ]
      }
    ],
    description: "An authentic tribute to North Karnataka's iconic weave. The Chandrakala Ilkal is woven with fine silk warp and combed cotton weft, giving it an effortless drape that breathes with you throughout the day. It features the signature red Tope Teni pallu joined with traditional Kondi technique.",
    specs: {
      "Fabric Composition": "60% Mulberry Silk, 40% Fine Cotton",
      "Weave Type": "Traditional Handloom Weave",
      "Saree Length": "6.25 meters (Includes unstitched blouse piece)",
      "Blouse Piece": "80 cm matching running blouse with border",
      "Border & Pallu": "Chikki Paras border with iconic Tope Teni pallu",
      "Zari": "Muted antique zari threadwork",
      "Weight": "Approx. 520 grams (Lightweight & easy drape)"
    },
    washCare: [
      "Dry clean recommended for the first 2 washes to preserve the natural silk sheen.",
      "Subsequent washes: Gentle hand wash in cold water using a mild silk-friendly liquid detergent.",
      "Do not wring, soak, or brush.",
      "Dry in shade on a padded hanger.",
      "Iron on low to medium setting on the reverse side of the zari."
    ],
    shippingInfo: "Dispatched within 24–48 hours via India Post Speed Parcel. All-India tracking number shared on WhatsApp/Email. Delivery in 4–7 business days."
  },
  {
    id: "NLU-ILK-002",
    name: "Surya Rekha Ruby Ilkal Saree",
    tagline: "Heritage ruby red with subtle temple motifs and golden thread highlights",
    category: "ilkal",
    fabric: "Pure Cotton-Silk",
    loom: "Handloom",
    price: 3150,
    originalPrice: 3800,
    stock: 2,
    featured: true,
    badge: "Heritage Craft",
    colors: [
      {
        name: "Ruby Crimson & Zari",
        hex: "#7E1C2B",
        secondaryHex: "#C5A059",
        images: [
          "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        name: "Deep Mustard Gold",
        hex: "#C68B2A",
        secondaryHex: "#5E131E",
        images: [
          "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
        ]
      }
    ],
    description: "Woven by artisan clusters in Bagalkot, this saree embodies the warmth of morning sunrays. The body glows with rich ruby undertones, balanced by a neat temple border that stays crisp and poised for puja or intimate family gatherings.",
    specs: {
      "Fabric Composition": "Cotton-Silk Blend",
      "Weave Type": "Artisanal Handloom",
      "Saree Length": "6.2 meters",
      "Blouse Piece": "Included (Unstitched 80cm contrast blouse)",
      "Border": "Gayatri Temple border",
      "Pallu": "Traditional red & white structured weave",
      "Weight": "Approx. 490 grams"
    },
    washCare: [
      "Dry clean preferred for initial washes.",
      "Gentle cold hand wash thereafter. Avoid detergent powder; use mild shampoo or liquid wash.",
      "Steam iron or warm reverse press."
    ],
    shippingInfo: "Dispatched via India Post Speed Parcel with live parcel tracking to all Indian pin codes."
  },
  {
    id: "NLU-COT-003",
    name: "Malhar Indigo Handwoven Cotton Saree",
    tagline: "Airy 100-count combed cotton designed for all-day comfort and workwear grace",
    category: "cotton",
    fabric: "100% Combed Cotton",
    loom: "Handloom",
    price: 1950,
    originalPrice: 2400,
    stock: 5,
    featured: true,
    badge: "Everyday Muse",
    colors: [
      {
        name: "Indigo Blue & Ivory Border",
        hex: "#1E3F66",
        secondaryHex: "#FAF7F2",
        images: [
          "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        name: "Terracotta Earth & Charcoal",
        hex: "#A85138",
        secondaryHex: "#221C1D",
        images: [
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80"
        ]
      }
    ],
    description: "Light as a breeze and soft against your skin from the first drape. Woven from 100-count premium combed cotton, Malhar is crafted for the woman who loves living in sarees — from long boardroom hours to coffee conversations.",
    specs: {
      "Fabric Composition": "100% Breathable Fine Cotton",
      "Weave Type": "Slow Handloom Weave",
      "Saree Length": "6.3 meters with blouse",
      "Blouse Piece": "Unstitched 80cm matching fabric",
      "Texture": "Ultra-soft with natural cotton crinkle",
      "Weight": "Approx. 390 grams"
    },
    washCare: [
      "Machine wash on gentle delicate cycle or easy hand wash in cold water.",
      "Mild liquid detergent.",
      "Light starch optional for a crisper pleat, or steam iron for a soft fluid drape."
    ],
    shippingInfo: "India Post Speed Post dispatch within 24 hours. Free pan-India shipping."
  },
  {
    id: "NLU-COT-004",
    name: "Kaveri Pastel Linen-Cotton Saree",
    tagline: "Sage green weave with delicate micro-checks and silver selvage",
    category: "cotton",
    fabric: "Linen-Cotton",
    loom: "Powerloom",
    price: 1650,
    originalPrice: 2100,
    stock: 4,
    featured: false,
    badge: "Modern Minimalist",
    colors: [
      {
        name: "Sage Green & Silver",
        hex: "#7A9A80",
        secondaryHex: "#C0C0C0",
        images: [
          "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        name: "Dusty Rose Pink",
        hex: "#C08081",
        secondaryHex: "#FAF7F2",
        images: [
          "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
        ]
      }
    ],
    description: "Designed for effortless modern styling. Precision woven on modern looms for uniform finish and lightweight structure, Kaveri pairs beautifully with sleeveless tops, crop jackets, or classic silver jewelry.",
    specs: {
      "Fabric Composition": "60% Organic Linen, 40% Cotton",
      "Loom Type": "Precision Powerloom Weave",
      "Saree Length": "6.2 meters",
      "Blouse Piece": "Contrast 80cm unstitched fabric included",
      "Weight": "Approx. 410 grams"
    },
    washCare: [
      "Cold gentle wash.",
      "Hang dry in shade.",
      "Warm iron while slightly damp for best crisp look."
    ],
    shippingInfo: "Dispatched via India Post Speed Parcel. 4–7 business days delivery across India."
  },
  {
    id: "NLU-SLK-005",
    name: "Aadya Raw Silk & Antique Zari Saree",
    tagline: "Luminous emerald green raw silk with rich floral zari pallu",
    category: "silk",
    fabric: "Raw Silk",
    loom: "Handloom",
    price: 5200,
    originalPrice: 6500,
    stock: 2,
    featured: true,
    badge: "Festive Heirloom",
    colors: [
      {
        name: "Emerald Green & Vintage Gold",
        hex: "#1B4D3E",
        secondaryHex: "#C5A059",
        images: [
          "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        name: "Royal Wine Plum",
        hex: "#4D1B36",
        secondaryHex: "#C5A059",
        images: [
          "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
        ]
      }
    ],
    description: "For life's defining celebrations. The Aadya saree features genuine raw silk with textured slubs that catch the ambient light with majestic subtlety. Complemented by intricate antique gold zari borders inspired by temple frescoes.",
    specs: {
      "Fabric Composition": "100% Pure Raw Silk",
      "Weave Type": "Master Handloom Artisan Weave",
      "Saree Length": "6.3 meters with blouse",
      "Blouse Piece": "Unstitched brocade zari blouse (85 cm)",
      "Border & Pallu": "Dense antique gold zari weave",
      "Weight": "Approx. 610 grams"
    },
    washCare: [
      "Strictly dry clean only.",
      "Store wrapped in a muslin cloth or breathable cotton saree bag.",
      "Do not spray perfume directly on zari work."
    ],
    shippingInfo: "Free insured India Post Speed Post delivery. Shipped in signature protective packaging."
  },
  {
    id: "NLU-SLK-006",
    name: "Manjari Soft Silk Tissue Saree",
    tagline: "Champagne gold tissue weave with molten metallic sheen and delicate scallop border",
    category: "silk",
    fabric: "Soft Silk Tissue",
    loom: "Powerloom",
    price: 4400,
    originalPrice: 5300,
    stock: 3,
    featured: false,
    badge: "Trending Drape",
    colors: [
      {
        name: "Champagne Gold & Soft Rose",
        hex: "#D8C3A5",
        secondaryHex: "#E9B7B7",
        images: [
          "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
        ]
      }
    ],
    description: "Lightweight, ethereal, and radiant in photographs. The Manjari tissue silk saree drapes without puffing, contouring the body with liquid metallic grace. Perfect for cocktail receptions, sangeets, or evening celebrations.",
    specs: {
      "Fabric Composition": "Silk Tissue Blend",
      "Loom Type": "Precision Modern Weave",
      "Saree Length": "6.2 meters",
      "Blouse Piece": "Tone-on-tone unstitched silk blouse (80 cm)",
      "Border": "Fine embroidered scallop zari border",
      "Weight": "Approx. 440 grams"
    },
    washCare: [
      "Dry clean only.",
      "Fold along original creases and change folds every 4 months.",
      "Low temperature iron on reverse."
    ],
    shippingInfo: "Dispatched within 24 hours via India Post Speed Parcel. 4–7 business days pan-India."
  },
  {
    id: "NLU-ILK-007",
    name: "Hampi Ochre Ilkal Handloom Saree",
    tagline: "Earthy mustard ochre with contrasting maroon pallu and broad chikki paras border",
    category: "ilkal",
    fabric: "Cotton-Silk",
    loom: "Handloom",
    price: 3300,
    originalPrice: 3950,
    stock: 1,
    featured: false,
    badge: "Only 1 Left",
    colors: [
      {
        name: "Mustard Ochre & Heritage Maroon",
        hex: "#D49B35",
        secondaryHex: "#5E131E",
        images: [
          "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
        ]
      }
    ],
    description: "A singular piece woven by generational weavers in Guledgudda. The earthy ochre field pays homage to the ancient stone corridors of Hampi, crowned by the timeless deep maroon Tope Teni pallu.",
    specs: {
      "Fabric Composition": "Cotton-Silk Blend (High count)",
      "Weave Type": "Authentic Handloom",
      "Saree Length": "6.25 meters",
      "Blouse Piece": "Unstitched 80cm blouse included",
      "Weight": "Approx. 500 grams"
    },
    washCare: [
      "First dry clean recommended.",
      "Gentle cold hand wash thereafter with natural liquid soap."
    ],
    shippingInfo: "India Post Speed Post delivery across India in 4–7 business days."
  },
  {
    id: "NLU-COT-008",
    name: "Ananya Jamdani Motif Cotton Saree",
    tagline: "Pure unbleached cream cotton with floating mustard and charcoal floral butis",
    category: "cotton",
    fabric: "Pure Cotton",
    loom: "Handloom",
    price: 2450,
    originalPrice: 2990,
    stock: 3,
    featured: false,
    badge: "Artisanal",
    colors: [
      {
        name: "Natural Ivory & Mustard Buti",
        hex: "#F9F6EE",
        secondaryHex: "#C68B2A",
        images: [
          "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80"
        ]
      }
    ],
    description: "Extraordinarily breathable muslin-soft cotton featuring supplementary weft Jamdani motifs that appear to float upon the textile like whispered poetry. Effortless to drape, comfortable through the hottest Indian summers.",
    specs: {
      "Fabric Composition": "100% Hand-Spun Cotton",
      "Weave Type": "Traditional Handloom",
      "Saree Length": "6.2 meters with blouse piece",
      "Weight": "Approx. 370 grams (Featherweight)"
    },
    washCare: [
      "Gentle hand wash in cold water.",
      "Dry flat in shade. Do not bleach."
    ],
    shippingInfo: "Dispatched via India Post Speed Post."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NOOLU_CATALOG;
}
