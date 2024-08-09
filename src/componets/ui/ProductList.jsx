import ProductItem from "./ProductItem";
const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    discount: 40,
    currentPrice: 120,
    originalPrice: 160,
    rating: 5,
    reviewCount: 88,
    imageUrl: "/public/itemConsol.svg",
    detailsUrl: "./details.html",
  },
  {
    id: 2,
    name: "Razer DeathAdder V2",
    discount: 25,
    currentPrice: 60,
    originalPrice: 80,
    rating: 4,
    reviewCount: 120,
    imageUrl: "/public/itemConsol.svg",
    detailsUrl: "./details-razer.html",
  },
  {
    id: 3,
    name: "Logitech G502 HERO",
    discount: 30,
    currentPrice: 70,
    originalPrice: 100,
    rating: 4.5,
    reviewCount: 200,
    imageUrl: "/public/itemConsol.svg",
    detailsUrl: "./details-logitech.html",
  },
  {
    id: 4,
    name: "Corsair K95 RGB Keyboard",
    discount: 15,
    currentPrice: 170,
    originalPrice: 200,
    rating: 4.8,
    reviewCount: 150,
    imageUrl: "/public/itemConsol.svg",
    detailsUrl: "./details-corsair.html",
  },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-4 gap-x-[35px]">
      {products.map((product, index) => (
        <ProductItem key={index} product={product}></ProductItem>
      ))}
    </div>
  );
}
