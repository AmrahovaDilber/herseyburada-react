const PRODUCTS = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    slug: "havit_hv_g92_gamepad",
    discount: 40,
    currentPrice: 120,
    originalPrice: 160,
    rating: 5,
    reviewCount: 88,
    isBasket: false,
    imageUrl: "/itemConsol.svg",
    about:
      "The HAVIT HV-G92 Gamepad is designed for precision gaming with its ergonomic design, dual analog sticks, and responsive buttons, making it perfect for PC and console gaming.",
    stockStatus: "In stock", // added stock status based on common format
    colors: ["blue", "red"], // assumed colors based on common product details
    sizes: ["XS", "S", "M", "L", "XL"], // placeholder sizes, adjust as needed
    quantity: 0, // assumed for initial display
  },
  {
    id: 2,
    name: "Razer DeathAdder V2",
    slug: "razer_deathAdder_v2",
    discount: 25,
    currentPrice: 60,
    originalPrice: 80,
    rating: 4,
    reviewCount: 120,
    imageUrl: "/itemConsol.svg",
    about:
      "The Razer DeathAdder V2 is a top-tier gaming mouse known for its ergonomic shape, high-precision 20K DPI optical sensor, and durable mechanical switches, making it a favorite among professional gamers.",
    isBasket: false,
    detailsUrl: "./details-razer.html",
    stockStatus: "No stock",
    colors: ["blue", "red"],
    sizes: ["XS", "S", ],
    quantity: 0,
  },
  {
    id: 3,
    name: "Logitech G502 HERO",
    slug: "logitech_g502_hero",
    discount: 30,
    currentPrice: 70,
    originalPrice: 100,
    rating: 4.5,
    reviewCount: 200,
    imageUrl: "/itemConsol.svg",
    about:
      "The Logitech G502 HERO is an advanced gaming mouse featuring a HERO 25K sensor, customizable weight tuning, and 11 programmable buttons, delivering exceptional control and accuracy.",
    isBasket: false,
    detailsUrl: "./details-logitech.html",
    stockStatus: "In stock",
    colors: ["blue", "red"],
    sizes: [ "M", "L", "XL"],
    quantity: 0,
  },
  {
    id: 4,
    name: "Corsair K95 RGB Keyboard",
    slug: "corsair_k95_rGB_keyboard",
    discount: 15,
    currentPrice: 170,
    originalPrice: 200,
    rating: 4.8,
    reviewCount: 150,
    imageUrl: "/itemConsol.svg",
    about:
      "The Corsair K95 RGB Keyboard is a high-performance mechanical keyboard with Cherry MX switches, dynamic RGB backlighting, and six dedicated macro keys, ideal for gamers and productivity enthusiasts.",
    isBasket: false,
    detailsUrl: "./details-corsair.html",
    stockStatus: "In stock",
    colors: ["blue", "red"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 0,
  },
];

export default PRODUCTS;
