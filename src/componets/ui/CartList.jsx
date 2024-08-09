import CartItem from './CartItem';
export default function CartList({ products }) {
  return (
    <div className="space-y-[40px]">
      <div className="grid grid-cols-4 rounded-[4px] gap-[15rem] items-center h-[72px] font-semibold border border-gray-100 shadow-sm px-[40px]">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div className="text-right">Subtotal</div>
      </div>
      {products.map((product) => (
        <CartItem key={product.name} product={product} />
      ))}
    </div>
  );
}
