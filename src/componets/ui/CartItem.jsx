// CartItem.jsx
export default function CartItem({ product }) {
    return (
      <div className="grid grid-cols-4 rounded-[4px] gap-[15rem] h-[102px] items-center border border-gray-100 shadow-sm px-[40px]">
        <div className="flex items-center">
          <figure className="px-[2px] py-[8px] mr-[24px] w-[54px] h-[54px] shrink-0">
            <img className="w-full h-full object-contain" src={product.image} alt={product.name} />
          </figure>
          <span className="shrink-0">{product.name}</span>
        </div>
        <div><span className="prices">{product.price}</span></div>
        <div className="countDivCart border border-gray-300 rounded-[4px] w-[72px] h-[44px] px-[12px] flex items-center justify-between">
          <span className="countElementCart text-center w-full">{product.quantity}</span>
          <div className="flex flex-col justify-center w-[16px] h-[32px]">
            <button className="cartIncrease text-gray-600 h-[16px] w-full hover:text-black transition-colors duration-200">
              <i className="fa-solid fa-chevron-up text-[13px]"></i>
            </button>
            <button className="cartDecrease text-gray-600 hover:text-black transition-colors duration-200">
              <i className="fa-solid fa-chevron-down text-[13px]"></i>
            </button>
          </div>
        </div>
        <div className="text-right"><span className="subtotal">{product.subtotal}</span></div>
      </div>
    );
  }
  