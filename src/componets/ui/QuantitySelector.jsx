function QuantitySelector() {
    return (
      <div className="w-[159px] h-[44px] rounded-[4px] overflow-hidden flex items-center justify-center">
        <div
          className="inline-flex items-center justify-center w-[40px] h-[44px] border cursor-pointer"
          id="decrease"
        >
          <p className="text-[24px]">-</p>
        </div>
        <div className="inline-flex items-center justify-center h-[44px] grow border">
          <span className="text-[24px]" id="count" />
        </div>
        <div
          className="inline-flex items-center justify-center w-[40px] h-[44px] bg-[#FF7518] text-white cursor-pointer"
          id="increase"
        >
          <p className="text-[24px]">+</p>
        </div>
      </div>
    );
  }
export default QuantitySelector  