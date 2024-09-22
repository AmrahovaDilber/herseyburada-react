import { Link } from "react-router-dom";

export default function CartTotal({ subtotal }) {
  const shippingCost = 25.00;
  const total = parseFloat(subtotal) + shippingCost;

  return (
    <div className="w-[470px] h-[324px] border border-gray-300 rounded-[4px] space-y-[16px] px-[32px] py-[24px] bg-gray-50">
      <h3 className="font-medium text-[24px] mb-[24px]">Cart Total</h3>
      <div className="flex justify-between border-b border-gray-200 pb-[16px]">
        <span>Subtotal:</span>
        <span id="subtotal">${subtotal}</span>
      </div>
      <div className="flex justify-between border-b border-gray-200 pb-[16px]">
        <span>Shipping:</span>
        <span id="shipping">${shippingCost.toFixed(2)}</span>
      </div>
      <div className="flex justify-between pb-[16px]">
        <span>Total:</span>
        <span id="total">${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-center">
        <Link to="/checkout">
          <button className="px-[48px] py-[16px] rounded-[4px] text-white bg-[#ff7518] font-medium transition-colors hover:bg-[#e07575] duration-200">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}