export default function CartTotal({ subtotal, isCouponApplied }) {
  const shippingCost = isCouponApplied ? 0 : 25.0;
  const total = parseFloat(subtotal) + shippingCost;

  return (
    <div className="w-full sm:w-[470px] h-auto sm:h-[324px] border border-gray-300 dark:border-gray-700 rounded-[4px] space-y-[16px] px-[16px] sm:px-[32px] py-[16px] sm:py-[24px] bg-gray-50 dark:bg-[#1E1E1E]">
      <h3 className="font-medium text-[20px] sm:text-[24px] mb-[16px] sm:mb-[24px] text-gray-800 dark:text-gray-200">
        Səbət cəmi
      </h3>
      <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-[12px] sm:pb-[16px]">
        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-400">Cəmi:</span>
        <span
          id="subtotal"
          className="text-sm sm:text-base text-gray-800 dark:text-gray-300"
        >
          ${subtotal}
        </span>
      </div>
      <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-[12px] sm:pb-[16px]">
        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-400">Çatdırılma:</span>
        <span
          id="shipping"
          className="text-sm sm:text-base text-gray-800 dark:text-gray-300"
        >
          ${shippingCost.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between pb-[12px] sm:pb-[16px]">
        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-400">Ümumi Cəm:</span>
        <span
          id="total"
          className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100"
        >
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
