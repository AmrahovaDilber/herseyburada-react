import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-4 gap-[35px]">
      {products.map((product, index) => (
        <ProductItem key={index} product={product}></ProductItem>
      ))}
    </div>
  );
}
