import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { useContextApp } from "../../context/AppContext";

export default function CartList() {
  const { carts, products, fetchCartProducts } = useContextApp();
  
  const [productCounts, setProductCounts] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setCartProducts(fetchCartProducts());
    setProductCounts(
      fetchCartProducts().reduce((acc, product) => {
        acc[product.product_id] = 1;
        return acc;
      }, {})
    );
  }, [carts]);

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
      {cartProducts.length > 0 &&
        cartProducts.map((product) => (
          <CartItem
            key={product.product_id}
            product={product}
            count={productCounts[product.product_id] || 1}
            setCount={(newCount) => updateProductCount(product.product_id, newCount)}
            updateProductCount={updateProductCount}
          />
        ))}
      {cartProducts.length === 0 && (
        <div className="flex justify-center items-center h-80 rounded-lg">
          <p className="text-gray-600 text-lg font-semibold">
            Your Cart Is Empty
          </p>
        </div>
      )}
    </div>
  );
}
