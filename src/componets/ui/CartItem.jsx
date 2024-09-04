import { useContextApp } from "../../context/AppContext";

export default function CartItem({ product, count, setCount, updateProductCount }) {
  const { removeFromCart } = useContextApp();

  function handleDecrease() {
    if (count > 1) {
      setCount(count - 1);
      updateProductCount(product.id, count - 1); 
    }
  }

  function handleIncrease() {
    setCount(count + 1);
    updateProductCount(product.id, count + 1); 
  }

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md mb-4">
      <div className="flex items-center space-x-4 col-span-1">
        <figure className="w-16 h-16">
          <img
            className="w-full h-full object-cover rounded-md"
            src={product.imageUrl}
            alt={product.name}
          />
        </figure>
        <span className="text-lg font-semibold text-gray-800">
          {product.name}
        </span>
      </div>

      <div className="text-gray-600 font-medium">${product.originalPrice}</div>

      <div className="flex items-center space-x-1 border border-gray-300 rounded-lg p-1 w-28">
        <button
          onClick={handleDecrease}
          className="px-1 py-0.5 text-gray-600 hover:text-black transition-colors duration-200"
        >
          <i className="fa-solid fa-chevron-down text-sm"></i>
        </button>
        <span className="px-1 py-0.5 text-gray-800 text-sm w-12 text-center">
          {count}
        </span>
        <button
          onClick={handleIncrease}
          className="px-1 py-0.5 text-gray-600 hover:text-black transition-colors duration-200"
        >
          <i className="fa-solid fa-chevron-up text-sm"></i>
        </button>
      </div>

      <div className="text-gray-800 font-medium text-center">
        ${count * product.originalPrice}
      </div>

      <button
        className="text-red-600 hover:text-red-800 transition-colors duration-200"
        onClick={() => removeFromCart(product.id)}
      >
        <i className="fa-solid fa-trash text-lg"></i>
      </button>
    </div>
  );
}
