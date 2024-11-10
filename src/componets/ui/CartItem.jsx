import { useContextApp } from "../../context/AppContext";

export default function CartItem({ product, count, setCount, updateProductCount, subtotal }) {
  const { removeFromCart } = useContextApp();

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateProductCount(product.product_id, newCount);
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updateProductCount(product.product_id, newCount);
    }
  }

  const handleRemove = () => {
    removeFromCart(product.product_id);
  };

  console.log(`Rendering CartItem for product ${product.product_id}: count=${count}, subtotal=${subtotal}`);

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 items-center border border-gray-100 shadow-sm px-4 py-2">
      <div className="flex items-center gap-2">
        <img src={product.image_url} alt={product.product_name} className="w-16 h-16 object-cover" />
        <span>{product.product_name}</span>
      </div>
      <div>${parseFloat(product.original_price).toFixed(2)}</div>
      <div className="flex items-center gap-2">
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          min="1"
          value={count}
          onChange={(e) => {
            const newCount = Math.max(1, parseInt(e.target.value) || 1);
            setCount(newCount);
            updateProductCount(product.product_id, newCount);
          }}
          className="w-12 text-center"
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="text-center">${subtotal}</div>
      <div className="text-center">
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}