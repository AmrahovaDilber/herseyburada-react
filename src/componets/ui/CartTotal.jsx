// CartTotal.jsx
export default function CartTotal({ subtotal, total }) {
    return (
      <div className="w-[470px] h-[324px] border border-gray-300 rounded-[4px] space-y-[16px] px-[32px] py-[24px] bg-gray-50">
        <h3 className="font-medium text-[24px] mb-[24px]">Cart Total</h3>
        <div className="flex justify-between border-b border-gray-200 pb-[16px]">
          <span>Subtotal:</span>
          <span id="subtotal">{subtotal}</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-[16px]">
          <span>Shipping:</span>
          <span id="shipping">$25.00</span>
        </div>
        <div className="flex justify-between pb-[16px]">
          <span>Total:</span>
          <span id="total">{total}</span>
        </div>
        <div className="flex justify-center">
          <a href="./checkout.html">
            <button className="px-[48px] py-[16px] rounded-[4px] text-white bg-[#ff7518] font-medium transition-colors hover:bg-[#e07575] duration-200">
              Proceed to Checkout
            </button>
          </a>
        </div>
      </div>
    );
  }
  