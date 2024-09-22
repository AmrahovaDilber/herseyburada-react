import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <div className="grid px-2 sm:px-0 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-[35px]">
      {products.map((product, index) => (
        <ProductItem key={index} product={product}></ProductItem>
      ))}
    </div>
  );
}
