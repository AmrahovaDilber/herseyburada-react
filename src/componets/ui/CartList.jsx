import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { useContextApp } from "../../context/AppContext";
import Coupon from "./Coupan";

export default function CartList({handleApply,text,setText}) {
  const { carts, fetchCartProducts } = useContextApp();
  
  const [productCounts, setProductCounts] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [overallSubtotal, setOverallSubtotal] = useState(0);

  useEffect(() => {
    const fetchedProducts = fetchCartProducts();
    console.log("Fetched products:", fetchedProducts);
    setCartProducts(fetchedProducts);
    const initialCounts = fetchedProducts.reduce((acc, product) => {
      acc[product.product_id] = product.quantity || 1;
      return acc;
    }, {});
    setProductCounts(initialCounts);
    calculateOverallSubtotal(fetchedProducts, initialCounts);
  }, [carts, fetchCartProducts]);

  const updateProductCount = (id, newCount) => {
    console.log(`Updating count for product ${id} to ${newCount}`);
    setProductCounts((prevCounts) => {
      const newCounts = {
        ...prevCounts,
        [id]: newCount,
      };
      calculateOverallSubtotal(cartProducts, newCounts);
      return newCounts;
    });
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_id === id
          ? { ...product, quantity: newCount }
          : product
      )
    );
  };

  const calculateSubtotal = (product) => {
    const count = productCounts[product.product_id] || 1;
    const price = parseFloat(product.original_price) || 0;
    const subtotal = (price * count).toFixed(2);
    console.log(`Calculating subtotal for product ${product.product_id}: price=${price}, count=${count}, subtotal=${subtotal}`);
    return subtotal;
  };

  const calculateOverallSubtotal = (products, counts) => {
    const subtotal = products.reduce((total, product) => {
      const count = counts[product.product_id] || 1;
      const price = parseFloat(product.original_price) || 0;
      return total + price * count;
    }, 0);
    setOverallSubtotal(subtotal.toFixed(2));
  };

  return (
    <div>
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
              subtotal={calculateSubtotal(product)}
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
      <div className="flex justify-between">
        <Coupon handleApply={handleApply} text={text} setText={setText} />
        <CartTotal subtotal={overallSubtotal} />
      </div>

    </div>
  );
}