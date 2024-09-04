import { useState } from "react";
import CartItem from "./CartItem";

export default function CartList({ products }) {
  // Initializing count state for each product
  const [productCounts, setProductCounts] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1; // Initialize with 1 or the actual count if available
      return acc;
    }, {})
  );

  // Update count for a specific product
  const updateProductCount = (id, newCount) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: newCount,
    }));
  };

  return (
    <div className="space-y-4 h-[450px] overflow-y-auto">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 items-center h-16 font-semibold border border-gray-100 shadow-sm px-4 py-2">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div className="text-center">Subtotal</div>
        <div className="text-center">Delete</div>
      </div>
      {products.length > 0 &&
        products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            count={productCounts[product.id] || 1} // Default to 1 if not available
            setCount={(newCount) => updateProductCount(product.id, newCount)}
            updateProductCount={updateProductCount}
          />
        ))}
      {products.length === 0 && (
        <div className="flex justify-center items-center h-80 rounded-lg">
          <p className="text-gray-600 text-lg font-semibold">
            Your Cart Is Empty
          </p>
        </div>
      )}
    </div>
  );
}
