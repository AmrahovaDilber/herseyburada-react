// CartPage.jsx
import CartList from "../componets/ui/CartList";
import Coupon from "../componets/ui/Coupan";
import CartTotal from "../componets/ui/CartTotal";
import { Link } from "react-router-dom";
export default function CartPage() {
  const products = [
    {
      name: "LCD Monitor",
      price: "$650",
      quantity: 1,
      subtotal: "$650",
      image: "./assets/img/monitor.png",
    },
    {
      name: "H1 Gamepad",
      price: "$550",
      quantity: 1,
      subtotal: "$550",
      image: "./assets/img/gamepad.png",
    },
  ];

  const subtotal = "$1200";
  const total = "$1225";

  return (
    <main className="w-[1200px] mx-auto pt-[40px] font-poppins">
      <div className="mb-[40px] text-gray-500">
        <Link
          to={"/"}
          className="hover:text-black transition-colors duration-200"
        >
          Home
        </Link>
        <span className="mx-[12px]">/</span>
        <Link
          to={"/cartpage"}
          href="cart.html"
          className="hover:text-black text-black transition-colors duration-200"
        >
          Cart
        </Link>
      </div>

      <div className="mb-[80px]">
        <CartList products={products} />

        {/* CartActions Component */}
        <div className="mt-[24px] flex justify-between">
          <Link
       to={'/filter'}
            className="border border-black/50 rounded-[4px] px-[48px] py-[16px] font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Return To Shop
          </Link>
          <a
            href="#"
            className="border border-black/50 rounded-[4px] px-[48px] py-[16px] font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Update Cart
          </a>
        </div>
      </div>

      <div className="flex justify-between">
        <Coupon />
        <CartTotal subtotal={subtotal} total={total} />
      </div>
    </main>
  );
}
