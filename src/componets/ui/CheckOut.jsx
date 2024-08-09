function CheckOut() {
  return (
    <>
      <div className="mb-[40px]">
        <a href="account.html" className="opacity-50 hover:opacity-80">
          Account
        </a>
        <span className="opacity-50 mx-[12px]">/</span>
        <a href="./account.html" className="opacity-50 hover:opacity-80">
          My Account
        </a>
        <span className="opacity-50 mx-[12px]">/</span>
        <a href="#" className="opacity-50 hover:opacity-80">
          Product
        </a>
        <span className="opacity-50 mx-[12px]">/</span>
        <a href="cart.html" className="opacity-50 hover:opacity-80">
          View Cart
        </a>
        <span className="opacity-50 mx-[12px]">/</span>
        <a href="checkout.html">CheckOut</a>
      </div>
      <div>
        <h1 className="font-medium text-[36px] mb-[48px]">Billing Details</h1>
        <div className="flex justify-between">
          <div>
            <div className="space-y-[32px] mb-[24px]">
              <div>
                <p className="mb-[8px] opacity-40">
                  First Name<span className="text-[#ff7518]">*</span>
                </p>
                <input
                  type="text"
                  className="bg-[#f5f5f5] h-[50px] w-[470px] px-[24px]  outline-none"
                />
              </div>
              <div>
                <p className="mb-[8px] opacity-40">Company Name</p>
                <input
                  type="text"
                  className="bg-[#f5f5f5] h-[50px] w-[470px] px-[24px]  outline-none"
                />
              </div>
              <div>
                <p className="mb-[8px] opacity-40">
                  Street Address<span className="text-[#ff7518]">*</span>
                </p>
                <input
                  type="text"
                  className="bg-[#f5f5f5] h-[50px] w-[470px] px-[24px]  outline-none"
                />
              </div>
              <div>
                <p className="mb-[8px] opacity-40">
                  Apartment, floor, etc. (optional)
                </p>
                <input
                  type="text"
                  className="bg-[#f5f5f5] h-[50px] w-[470px] px-[24px]  outline-none"
                />
              </div>
              <div>
                <p className="mb-[8px] opacity-40">
                  Town/City<span className="text-[#ff7518]">*</span>
                </p>
                <input
                  type="text"
                  className="bg-[#f5f5f5] h-[50px] w-[470px] px-[24px]  outline-none"
                />
              </div>
              <div>
                <p className="mb-[8px] opacity-40">
                  Phone Number<span className="text-[#ff7518]">*</span>
                </p>
                <input
                  type="text"
                  className="bg-[#f5f5f5] h-[50px] w-[470px] px-[24px]  outline-none"
                />
              </div>
              <div>
                <p className="mb-[8px] opacity-40">
                  Email Address<span className="text-[#ff7518]">*</span>
                </p>
                <input
                  type="text"
                  className="bg-[#f5f5f5] h-[50px] w-[470px] px-[24px]  outline-none"
                />
              </div>
            </div>
            <div className="flex space-x-[16px]">
              <input
                type="checkbox"
                id="save-info-check"
                className="border-black border size-[24px]  rounded-[4px]"
              />
              <label htmlFor="save-info-check" className="cursor-pointer">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
          <div className="space-y-[32px] w-[527px]">
            <div className="space-y-[32px] w-[425px]">
              <div className="flex items-center h-[54px] ">
                <figure className="inline-flex items-center size-[54px] px-[2px] py-[5px] mr-[24px]">
                  <img src="./assets/img/gamepad.png" alt="" />
                </figure>
                <div className="flex w-full justify-between items-center">
                  <soan>H1 Gamepad</soan>
                  <span>$650</span>
                </div>
              </div>
              <div className="flex items-center h-[54px]">
                <figure className="inline-flex items-center size-[54px] px-[2px] py-[5px] mr-[24px]">
                  <img src="./assets/img/monitor.png" alt="" />
                </figure>
                <div className="flex w-full justify-between items-center">
                  <span>LCD Monitor</span>
                  <span>$1100</span>
                </div>
              </div>
            </div>
            <div className="w-[422px] space-y-[16px]">
              <div className="flex justify-between border-b border-black/40 pb-[16px]">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between border-b border-black/40 pb-[16px]">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between pb-[16px]">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>
            <div className="flex justify-between w-[427px]">
              <div className="space-x-[16px] flex items-center ">
                <input type="radio" name="payment" className="size-[24px]" />
                <span>Bank</span>
              </div>
              <div className="space-x-[8px] flex ">
                <figure className="w-[42px] h-[28px] px-[2px]">
                  <img
                    className="w-full h-full object-contain"
                    src="./assets/img/bkash.png"
                    alt="bKash"
                  />
                </figure>
                <figure className="w-[42px] h-[28px] px-[2px]">
                  <img
                    className="w-full h-full object-contain"
                    src="./assets/img/visa.png"
                    alt="Visa"
                  />
                </figure>
                <figure className="w-[42px] h-[28px] px-[2px]">
                  <img
                    className="w-full h-full object-contain"
                    src="./assets/img/master-card.png"
                    alt="MasterCard"
                  />
                </figure>
                <figure className="w-[42px] h-[28px] px-[2px]">
                  <img
                    className="w-full h-full object-contain"
                    src="./assets/img/fireball.png"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div className="space-x-[16px] flex items-center ">
              <input type="radio" name="payment" className="size-[24px]" />
              <span>Cash on delivery</span>
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Coupon Code"
                className="px-[24px] border border-black h-[56px] w-[300px] opacity-50 outline-none rounded-[4px] mr-[16px]"
              />
              <button className="px-[48px] py-[16px] rounded-[4px] text-white bg-[#ff7518] hover:bg-[#e07575]">
                Apply Coupon
              </button>
            </div>
            <div>
              <button className="px-[48px] py-[16px] rounded-[4px] text-white bg-[#ff7518] hover:bg-[#e07575]">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
