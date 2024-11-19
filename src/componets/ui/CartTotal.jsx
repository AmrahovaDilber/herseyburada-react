export default function CartTotal({ subtotal }) {
  const shippingCost = 25.00;
  const total = parseFloat(subtotal) + shippingCost;

  return (
    <div className="w-full sm:w-[470px] h-auto sm:h-[324px] border border-gray-300 rounded-[4px] space-y-[16px] px-[16px] sm:px-[32px] py-[16px] sm:py-[24px] bg-gray-50">
      <h3 className="font-medium text-[20px] sm:text-[24px] mb-[16px] sm:mb-[24px]">Səbət cəmi</h3>
      <div className="flex justify-between border-b border-gray-200 pb-[12px] sm:pb-[16px]">
        <span className="text-sm sm:text-base">Cəmi:</span>
        <span id="subtotal" className="text-sm sm:text-base">${subtotal}</span>
      </div>
      <div className="flex justify-between border-b border-gray-200 pb-[12px] sm:pb-[16px]">
        <span className="text-sm sm:text-base">Çatdırılma:</span>
        <span id="shipping" className="text-sm sm:text-base">${shippingCost.toFixed(2)}</span>
      </div>
      <div className="flex justify-between pb-[12px] sm:pb-[16px]">
        <span className="text-sm sm:text-base">Ümumi Cəm:</span>
        <span id="total" className="text-sm sm:text-base">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
