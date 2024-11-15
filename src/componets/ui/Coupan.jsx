export default function Coupon({ handleApply,text,setText }) {
  return (
    <div>
      <input
        onChange={(e)=>setText(e.target.value)}
        value={text}
        type="text"
        id="coupon-code"
        placeholder="Coupon Code"
        className="px-[24px] w-full mb-3 sm:mb-0 border border-gray-300 h-[56px] sm:w-[250px] opacity-75 outline-none rounded-[4px] mr-[16px] placeholder-gray-500"
      />
      <button
        onClick={handleApply}
        id="apply-coupon"
        className="w-full sm:w-60 h-[56px] rounded-md text-white bg-[#ff7518] transition-colors hover:bg-[#b85a17] duration-200"
      >
        Apply Coupon
      </button>
      <p className="mt-4 text-gray-400 text-center mb-3 sm:mb-0 sm:text-left">
        <span id="coupon-text">"BURADA"</span> kodundan istifadə edərək
        çatdırılmanı pulsuz et
      </p>
    </div>
  );
}
