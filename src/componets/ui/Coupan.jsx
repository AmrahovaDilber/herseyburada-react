// Coupon.jsx
export default function Coupon() {
    return (
      <div>
        <input
          type="text"
          id="coupon-code"
          placeholder="Coupon Code"
          className="px-[24px] border border-gray-300 h-[56px] w-[300px] opacity-75 outline-none rounded-[4px] mr-[16px] placeholder-gray-500"
        />
        <button
          id="apply-coupon"
          className="px-[48px] py-[16px] rounded-[4px] text-white bg-[#ff7518] transition-colors hover:bg-[#e07575] duration-200"
        >
          Apply Coupon
        </button>
        <p className="mt-4 text-gray-400">
          <span id="coupon-text">"BURADA"</span> kodundan istifadə edərək çatdırılmanı pulsuz et
        </p>
      </div>
    );
  }
  