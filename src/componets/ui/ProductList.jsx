import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <div className="grid  sm:px-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[17px] sm:gap-[30px]">
      {products.map((product, index) => (
        <ProductItem key={index} product={product}></ProductItem>
      ))}
    </div>
  );
}
