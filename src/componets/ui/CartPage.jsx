function CartPage() {
  return (
    <>
      <div className="mb-[40px] text-gray-500">
        <a
          href="index.html"
          className="hover:text-black transition-colors duration-200"
        >
          Home
        </a>
        <span className="mx-[12px]">/</span>
        <a
          href="cart.html"
          className="hover:text-black text-black transition-colors duration-200"
        >
          Cart
        </a>
      </div>
      <div className="mb-[80px]">
        <div className="space-y-[40px]">
          <div className="grid grid-cols-4 rounded-[4px] gap-[15rem] items-center h-[72px] font-semibold border border-gray-100 shadow-sm px-[40px]">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div className="text-right">Subtotal</div>
          </div>
          <div className="grid grid-cols-4 rounded-[4px] gap-[15rem] h-[102px] items-center border border-gray-100 shadow-sm px-[40px]">
            <div className="flex items-center">
              <figure className="px-[2px] py-[8px] mr-[24px] w-[54px] h-[54px] shrink-0">
                <img
                  className="w-full h-full object-contain"
                  src="./assets/img/monitor.png"
                  alt="LCD Monitor"
                />
              </figure>
              <span className="shrink-0">LCD Monitor</span>
            </div>
            <div>
              <span className="prices">$650</span>
            </div>
            <div className="countDivCart border border-gray-300 rounded-[4px] w-[72px] h-[44px] px-[12px] flex items-center justify-between">
              <span className="countElementCart text-center w-full">1</span>
              <div className="flex flex-col justify-center w-[16px] h-[32px]">
                <button className="cartIncrease text-gray-600 h-[16px] w-full hover:text-black transition-colors duration-200">
                  <i className="fa-solid fa-chevron-up text-[13px]" />
                </button>
                <button className="cartDecrease text-gray-600 hover:text-black transition-colors duration-200">
                  <i className="fa-solid fa-chevron-down text-[13px]" />
                </button>
              </div>
            </div>
            <div className="text-right">
              <span className="subtotal">$650</span>
            </div>
          </div>
          <div className="grid grid-cols-4 rounded-[4px] gap-[15rem] h-[102px] items-center border border-gray-100 shadow-sm px-[40px]">
            <div className="flex items-center">
              <figure className="px-[2px] py-[8px] mr-[24px] w-[54px] h-[54px] shrink-0">
                <img
                  className="w-full h-full object-contain"
                  src="./assets/img/gamepad.png"
                  alt="H1 Gamepad"
                />
              </figure>
              <span className="shrink-0">H1 Gamepad</span>
            </div>
            <div>
              <span className="prices">$550</span>
            </div>
            <div className="countDivCart border border-gray-300 rounded-[4px] w-[72px] h-[44px] px-[12px] flex items-center justify-between">
              <span className="countElementCart text-center w-full">1</span>
              <div className="flex flex-col justify-center w-[16px] h-[32px]">
                <button className="cartIncrease text-gray-600 h-[16px] w-full hover:text-black transition-colors duration-200">
                  <i className="fa-solid fa-chevron-up text-[13px]" />
                </button>
                <button className="cartDecrease text-gray-600 hover:text-black transition-colors duration-200">
                  <i className="fa-solid fa-chevron-down text-[13px]" />
                </button>
              </div>
            </div>
            <div className="text-right">
              <span className="subtotal">$550</span>
            </div>
          </div>
        </div>
        <div className="mt-[24px] flex justify-between">
          <a
            href="filter.html"
            className="border border-black/50 rounded-[4px] px-[48px] py-[16px] font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Return To Shop
          </a>
          <a
            href="#"
            className="border border-black/50 rounded-[4px] px-[48px] py-[16px] font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Update Cart
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <input
            type="text"
            id="coupon-code"
            placeholder="Coupon Code"
            className="px-[24px] border border-gray-300 h-[56px] w-[300px] opacity-75 outline-none rounded-[4px] mr-[16px] placeholder-gray-500"
          />
          <button
            id="apply-coupon"
            className="px-[48px] py-[16px] rounded-[4px] text-white bg-[#ff7518]  transition-colors hover:bg-[#e07575] duration-200"
          >
            Apply Coupon
          </button>
          <p className="mt-4 text-gray-400">
            <span id="coupon-text">"BURADA"</span> kodundan istifadə edərək
            çatdırılmanı pulsuz et
          </p>
        </div>
        <div className="w-[470px] h-[324px] border border-gray-300 rounded-[4px] space-y-[16px] px-[32px] py-[24px] bg-gray-50">
          <h3 className="font-medium text-[24px] mb-[24px]">Cart Total</h3>
          <div className="flex justify-between border-b border-gray-200 pb-[16px]">
            <span>Subtotal:</span>
            <span id="subtotal" />
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-[16px]">
            <span>Shipping:</span>
            <span id="shipping">$25.00</span>
          </div>
          <div className="flex justify-between pb-[16px]">
            <span>Total:</span>
            <span id="total" />
          </div>
          <div className="flex justify-center">
            <a href="./checkout.html">
              <button className="px-[48px] py-[16px] rounded-[4px] text-white bg-[#ff7518] font-medium  transition-colors hover:bg-[#e07575] duration-200">
                Proceed to Checkout
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
