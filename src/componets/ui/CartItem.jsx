import { useContextApp } from "../../context/AppContext";

export default function CartItem({ product }) {
  const { removeFromCart } = useContextApp();

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md mb-4">
      {/* Image and Name */}
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

      {/* Price */}
      <div className="text-gray-600 font-medium">${product.originalPrice}</div>

      {/* Quantity and Update Controls */}
      <div className="flex items-center space-x-1 border border-gray-300 rounded-lg p-1 w-28">
        <button className="px-1 py-0.5 text-gray-600 hover:text-black transition-colors duration-200">
          <i className="fa-solid fa-chevron-down text-sm"></i>
        </button>
        <span className="px-1 py-0.5 text-gray-800 text-sm w-12 text-center">
          {product.quantity}
        </span>
        <button className="px-1 py-0.5 text-gray-600 hover:text-black transition-colors duration-200">
          <i className="fa-solid fa-chevron-up text-sm"></i>
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-gray-800 font-medium text-center">
        ${product.quantity * product.originalPrice}
      </div>

      {/* Delete Button */}
      <button
        className="text-red-600 hover:text-red-800 transition-colors duration-200"
        onClick={() => removeFromCart(product.id)}
      >
        <i className="fa-solid fa-trash text-lg"></i>
      </button>
    </div>
  );
}
