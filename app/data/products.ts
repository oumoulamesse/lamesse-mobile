export const products = [
  {
    id: 1,
    name: "iPhone XR",
    description:
      "Un iPhone puissant et coloré. Propulsé par la **puce A12 Bionic**, il offre un **écran Liquid Retina 6,1\"** lumineux, un **appareil photo 12 Mpx** avec mode Portrait et une **autonomie de 25h**. Disponible en six coloris dont le rouge (PRODUCT)RED.",
    images: [
      "/images/products/iphone-xr.png",
      "/images/products/iphone-xr.png",
      "/images/products/iphone-xr.png",
    ],
    versions: [
      {
        name: "XR",
        variants: [
          { storage: "64GB", price: 85000 },
          { storage: "128GB", price: 90000 },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "iPhone 11",
    description:
      "L'iPhone qui a tout changé pour la photo. La **puce A13 Bionic** et le **double capteur 12 Mpx** avec **ultra grand-angle** livrent des clichés époustouflants. Le **mode Nuit** transforme vos photos en basse lumière. Les versions Pro ajoutent un **troisième téléobjectif** et une résistance à l'eau **IP68 (4 m)**.",
    images: [
      "/images/products/iphone-11-pro-max.png",
      "/images/products/iphone-11-c.png",
      "/images/products/_iPhone-11-Case.png",
    ],
    versions: [
      {
        name: "Simple",
        variants: [
          { storage: "64GB", price: 95000 },
          { storage: "128GB", price: 105000 },
        ],
      },
      {
        name: "Pro",
        variants: [
          { storage: "64GB", price: 125000 },
          { storage: "256GB", price: 140000 },
        ],
      },
      {
        name: "Pro Max",
        variants: [
          { storage: "64GB", price: 140000 },
          { storage: "256GB", price: 160000 },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "iPhone 12",
    description:
      "Le premier iPhone **5G**, avec un design plat moderne et le **Ceramic Shield** — 4× plus résistant aux chutes. L'écran **Super Retina XDR OLED** et la **puce A14 Bionic 5 nm** font un bond en avant. Compatible **MagSafe** et certifié **IP68 (6 m)**.",
    images: [
      "/images/products/iphone-12.png",
      "/images/products/iphone-12-Promax.png",
      "/images/products/_iphones-12-pro-max.png",
      "/images/products/iphone-12-pro-max!!.png",
    ],
    versions: [
      {
        name: "Simple",
        variants: [
          { storage: "64GB", price: 120000 },
          { storage: "128GB", price: 125000 },
        ],
      },
      {
        name: "Pro",
        variants: [
          { storage: "128GB", price: 160000 },
          { storage: "256GB", price: 175000 },
        ],
      },
      {
        name: "Pro Max",
        variants: [
          { storage: "128GB", price: 200000 },
          { storage: "256GB", price: 225000 },
        ],
      },
    ],
  },

  {
    id: 4,
    name: "iPhone 13",
    description:
      "Un bond en autonomie et en photo. La **puce A15 Bionic** assure des performances redoutables. Le **mode Cinématique** donne un rendu cinéma à vos vidéos. Les Pro intègrent un **écran ProMotion 120 Hz** adaptatif et un **zoom optique 3×** pour des portraits bluffants.",
    images: [
      "/images/products/iphone-13-pro-max.png",
      "/images/products/iPhone-13-Pro-Max-128Go.png",
      "/images/products/iphone 13-pro - pink.png",
    ],
    versions: [
      {
        name: "Simple",
        variants: [{ storage: "128GB", price: 165000 }],
      },
      {
        name: "Pro",
        variants: [
          { storage: "128GB", price: 225000 },
          { storage: "256GB", price: 240000 },
        ],
      },
      {
        name: "Pro Max",
        variants: [
          { storage: "128GB", price: 250000 },
          { storage: "256GB", price: 275000 },
        ],
      },
    ],
  },

  {
    id: 5,
    name: "iPhone 14",
    description:
      "Sécurité et photo au sommet. Il intègre la **détection d'accidents** et la **connexion satellite d'urgence**. La caméra **48 Mpx** (Pro) capture chaque détail. Les Pro arborent la **Dynamic Island** interactive et un **écran Always-On** — une première sur iPhone.",
    images: [
      "/images/products/iphone-14-pro-.png",
      "/images/products/iphone 14-pro-mauve.png",
      "/images/products/iphone-14.png",
    ],
    versions: [
      {
        name: "Simple",
        variants: [{ storage: "128GB", price: 195000 }],
      },
      {
        name: "Plus",
        variants: [{ storage: "128GB", price: 225000 }],
      },
      {
        name: "Pro",
        variants: [
          { storage: "128GB", price: 300000 },
          { storage: "256GB", price: 315000 },
        ],
      },
      {
        name: "Pro Max",
        variants: [
          { storage: "128GB", price: 350000 },
          { storage: "256GB", price: 370000 },
        ],
      },
    ],
  },

  {
    id: 6,
    name: "iPhone 15",
    description:
      "L'iPhone qui passe à **l'USB-C** et hérite de la **Dynamic Island** sur tous les modèles. Le **capteur 48 Mpx** avec zoom 2× optique sublime chaque portrait. Les Pro adoptent un **châssis en titane** ultra-léger et la **puce A17 Pro 3 nm**, la plus avancée jamais conçue pour un smartphone.",
    images: [
      "/images/products/_iPhone-15ProMax.png",
      "/images/products/iphone-15.png",
      "/images/products/iphone 15.png",
    ],
    versions: [
      {
        name: "Plus",
        variants: [
          { storage: "128GB", price: 315000 },
          { storage: "256GB", price: 330000 },
        ],
      },
      {
        name: "Pro",
        variants: [
          { storage: "256GB", price: 390000 },
          { storage: "256GB", price: 360000 },
        ],
      },
    ],
  },

  {
    id: 7,
    name: "iPhone 16",
    description:
      "Le premier iPhone conçu pour **Apple Intelligence**. La **puce A18** et le nouveau **bouton Contrôle de l'appareil photo** redéfinissent l'expérience. Les Pro filment en **vidéo 4K à 120 i/s** (Dolby Vision) et offrent jusqu'à **33h d'autonomie**. L'IA est au cœur de chaque interaction.",
    images: [
      "/images/products/iphone-16-.png",
      "/images/products/iphone-16-pro-max.png",
      "/images/products/iphone-16-A.png",
    ],
    versions: [
      {
        name: "Simple",
        variants: [
          { storage: "128GB", price: 350000 },
          { storage: "128GB", price: 380000 },
        ],
      },
      {
        name: "Plus",
        variants: [
          { storage: "128GB", price: 420000 },
          { storage: "128GB", price: 440000 },
        ],
      },
      {
        name: "Pro",
        variants: [{ storage: "256GB", price: 460000 }],
      },
      {
        name: "Pro Max",
        variants: [
          { storage: "256GB", price: 580000 },
          { storage: "256GB", price: 500000 },
          { storage: "512GB", price: 550000 },
        ],
      },
    ],
  },

  {
    id: 8,
    name: "iPhone 17",
    description:
      "La prochaine révolution Apple. Un nouveau modèle **« Air » ultrafin (< 6 mm)** ferait son apparition. Tous les modèles profiteraient du **120 Hz ProMotion**, d'une **caméra frontale 24 Mpx** et de la **puce A19** pour une intelligence artificielle encore plus puissante. Prix à confirmer lors de l'annonce officielle.",
    images: [
      "/images/products/iphone 17.png",
      "/images/products/iphone 17.png",
      "/images/products/iphone 17.png",
    ],
    versions: [
      {
        name: "Simple",
        variants: [{ storage: "128GB", price: 0 }],
      },
      {
        name: "Pro",
        variants: [{ storage: "256GB", price: 0 }],
      },
      {
        name: "Pro Max",
        variants: [{ storage: "512GB", price: 0 }],
      },
    ],
  },
];