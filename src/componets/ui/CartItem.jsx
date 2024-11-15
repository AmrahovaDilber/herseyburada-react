import { useContextApp } from "../../context/AppContext";
import { MdDelete } from "react-icons/md";
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
     <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-4">
  <img
    src={product.image_url}
    alt={product.product_name}
    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
  />
 <span className="text-center sm:text-left text-[13px] leading-[1rem] sm:text-base font-semibold text-gray-800 sm:text-gray-900 ">
  {product.product_name}
</span>

</div>
      <div>${parseFloat(product.original_price).toFixed(2)}</div>
      <div className="flex items-center gap-2">
  <button
    onClick={handleDecrement}
    className="w-6 h-6 sm:w-8 sm:h-8 text-[20px] sm:text-[22px] bg-gray-200 rounded-md flex items-center justify-center"
  >
    -
  </button>
  <input
    type="text"
    min="1"
    value={count}
    onChange={(e) => {
      const newCount = Math.max(1, parseInt(e.target.value) || 1);
      setCount(newCount);
      updateProductCount(product.product_id, newCount);
    }}
    className="w-8 sm:w-12 text-center border rounded-md text-sm sm:text-base"
  />
  <button
    onClick={handleIncrement}
    className="w-6 h-6 sm:w-8 sm:h-8 text-[20px] sm:text-[22px] bg-gray-200 rounded-md flex items-center justify-center"
  >
    +
  </button>
</div>

      <div className="text-center">${subtotal}</div>
      <div className="text-center">
        <button onClick={handleRemove} className="text-red-600  text-[18px] sm:text-[24px] "><MdDelete /></button>
      </div>
    </div>
  );
}