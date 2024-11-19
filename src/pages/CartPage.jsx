import CartList from "../componets/ui/CartList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContextApp } from "../context/AppContext";

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);
  const { fetchCartProducts, carts, setCarts, updateUserData, fetchProducts } = useContextApp();
  const [text, setText] = useState("");
  const [shipping, setShipping] = useState(25);

  useEffect(() => {
    setCartProducts(fetchCartProducts());
  }, [fetchCartProducts, carts]);

  function subtotal() {
    return cartProducts.reduce(
      (acc, product) => acc + product.originalPrice * product.quantity,
      0
    );
  }

  const total = subtotal() + shipping;

  function handleApply() {
    if (text === "BURADA") {
      setShipping(0);
    }
  }

  async function handleUpdateCart() {
    // Clear the cart completely
    setCarts([]);
    
    // Update local state
    setCartProducts([]);
    
    // Update user data in backend/localStorage
    await updateUserData([], []); // Assuming the second array is for favorites
    
    // Fetch updated products (this will reflect the empty cart)
    fetchProducts([]);
  }

  function updateProductQuantity(productId, newQuantity) {
    setCartProducts(prevProducts =>
      prevProducts.map(product =>
        product.product_id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  }

  return (
    <main className=" mx-auto pt-[40px] font-poppins">
      <div className="mb-[40px] text-gray-500">
        <Link
          to="/"
          className="hover:text-black transition-colors duration-200"
        >
          Home
        </Link>
        <span className="mx-[12px]">/</span>
        <Link
          to="/cartpage"
          className="hover:text-black text-black transition-colors duration-200"
        >
          Cart
        </Link>
      </div>

      <div className="mb-[80px]">
        <CartList
          total={total}
          handleApply={handleApply}
          products={cartProducts}
          setText={setText}
          updateProductQuantity={updateProductQuantity}
        />
<div className="mt-[24px] flex flex-col sm:flex-row w-full justify-between gap-[20px] sm:gap-[0px]">
  <Link
    to="/"
    className="border border-black/50 text-center rounded-[4px] w-full sm:w-[18%]  py-[16px] font-medium hover:bg-gray-100 transition-colors duration-200"
  >
    Return To Shop
  </Link>
  <button
    onClick={handleUpdateCart}
    className="border border-black/50 rounded-[4px] w-full sm:w-[18%]  py-[16px] font-medium hover:bg-gray-100 transition-colors duration-200"
  >
    Update Cart
  </button>
</div>

      </div>
    </main>
  );
}