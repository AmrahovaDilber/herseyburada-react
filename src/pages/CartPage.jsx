import CartList from "../componets/ui/CartList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContextApp } from "../context/AppContext";

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);
  const { fetchCartProducts, carts, setCarts, updateUserData, fetchProducts } =
    useContextApp();
  const [text, setText] = useState("");
  const [shipping, setShipping] = useState(25);

  useEffect(() => {
    setCartProducts(fetchCartProducts());
  }, [fetchCartProducts, carts]);

  const subtotal = () =>
    cartProducts.reduce(
      (acc, product) => acc + product.originalPrice * product.quantity,
      0
    );

  const total = subtotal() + shipping;

  const handleApply = () => {
    if (text.trim().toUpperCase() === "BURADA") {
      setShipping(0);
    }
  };

  const handleUpdateCart = async () => {
    setCarts([]);
    setCartProducts([]);
    await updateUserData([], []);
    fetchProducts([]);
  };

  const updateProductQuantity = (productId, newQuantity) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  return (
    <main className="mx-auto pt-10 font-poppins max-w-7xl">
      {/* Breadcrumb */}
      <div className="mb-10 text-gray-500">
        <Link
          to="/"
          className="hover:text-black  dark:text-[#fff] transition-colors duration-200"
        >
          Ana Səhifə
        </Link>
        <span className="mx-3">/</span>
        <Link
          to="/cartpage"
          className="hover:text-black text-black dark:text-[#fff]  transition-colors duration-200"
        >
          Səbət
        </Link>
      </div>

      {/* Cart Details */}
      <div className="mb-20">
        <CartList
          total={total}
          handleApply={handleApply}
          products={cartProducts}
          setText={setText}
          updateProductQuantity={updateProductQuantity}
        />

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between gap-5 sm:gap-0">
          <Link
            to="/"
            className="border border-black/50 dark:bg-[#202020] text-center rounded-md w-full sm:w-1/5 py-4 font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Alışverişə Qayıt
          </Link>
          <button
            onClick={handleUpdateCart}
            className="border border-black/50 dark:bg-[#202020] rounded-md w-full sm:w-1/5 py-4 font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Səbəti Sıfırla
          </button>
        </div>
      </div>
    </main>
  );
}
