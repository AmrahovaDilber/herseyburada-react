import { useState } from "react";
function QuantitySelector() {
  const [count, setCount] = useState(0);
  function handleDecrease() {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  }

  function handleIncrease() {
    setCount((count) => count + 1);
  }
  return (
    <div className="w-[159px] h-[44px] rounded-[4px] overflow-hidden flex items-center justify-center">
      <div
        className="inline-flex items-center justify-center w-[40px] h-[44px] border cursor-pointer"
        id="decrease"
      >
        <button onClick={handleDecrease} className="text-[24px]">
          -
        </button>
      </div>
      <div className="inline-flex items-center justify-center h-[44px] grow border">
        <span className="text-[24px]" id="count" />
        {count}
      </div>
      <div
        className="inline-flex items-center justify-center w-[40px] h-[44px] bg-[#FF7518] text-white cursor-pointer"
        id="increase"
      >
        <button onClick={handleIncrease} className="text-[24px]">
          +
        </button>
      </div>
    </div>
  );
}
export default QuantitySelector;
