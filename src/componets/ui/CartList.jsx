import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { useContextApp } from "../../context/AppContext";
import Coupon from "./Coupan";

export default function CartList() {
  const { carts, fetchCartProducts } = useContextApp();
  const [productCounts, setProductCounts] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [overallSubtotal, setOverallSubtotal] = useState(0);
  const [text, setText] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  useEffect(() => {
    const fetchedProducts = fetchCartProducts();
    setCartProducts(fetchedProducts);
    const initialCounts = fetchedProducts.reduce((acc, product) => {
      acc[product.product_id] = product.quantity || 1;
      return acc;
    }, {});
    setProductCounts(initialCounts);
    calculateOverallSubtotal(fetchedProducts, initialCounts);
  }, [carts, fetchCartProducts]);

  const handleApplyCoupon = () => {
    if (text === "BURADA") {
      setIsCouponApplied(true);
      setText("");
    } else {
      alert("Invalid coupon code");
    }
  };

  const updateProductCount = (id, newCount) => {
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
    return (price * count).toFixed(2);
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
    <div className="space-y-6">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-2 sm:gap-4 items-center h-12 sm:h-16 font-semibold border border-gray-100 shadow-sm px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">
        <div className="truncate text-sm sm:text-lg font-semibold text-gray-800 sm:text-gray-900 dark:text-[#fff]">Məhsul</div>
        <div className="truncate text-sm sm:text-lg font-semibold text-gray-800 sm:text-gray-900 dark:text-[#fff]">Qiymət</div>
        <div className="truncate text-sm sm:text-lg font-semibold text-gray-800 sm:text-gray-900 dark:text-[#fff]">Kəmiyyət</div>
        <div className="truncate text-center text-sm sm:text-lg font-semibold text-gray-800 sm:text-gray-900 dark:text-[#fff]">Cəmi</div>
        <div className="truncate text-center text-sm sm:text-lg font-semibold text-gray-800 sm:text-gray-900 dark:text-[#fff]">Sil</div>
      </div>

      <div className="space-y-4 h-[450px] overflow-y-auto">
        {cartProducts.length > 0 &&
          cartProducts.map((product) => (
            <CartItem
              key={product.product_id}
              product={product}
              count={productCounts[product.product_id] || 1}
              setCount={(newCount) => updateProductCount(product.product_id, newCount)}
              subtotal={calculateSubtotal(product)}
            />
          ))}
        {cartProducts.length === 0 && (
          <div className="flex justify-center items-center h-80 rounded-lg">
            <p className="text-gray-600 text-lg font-semibold dark:text-[#fff]">Səbətiniz Boşdur</p>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-between w-full space-y-4 sm:space-y-0">
        <Coupon handleApply={handleApplyCoupon} text={text} setText={setText} />
        <CartTotal subtotal={overallSubtotal} isCouponApplied={isCouponApplied} />
      </div>
    </div>
  );
}
