function ProductInfo() {
    return (
      <div>
        <div className="text-[24px] font-[600] mb-[16px]">
          Havic HV G-92 Gamepad
        </div>
        <div className="flex items-center mb-[16px] gap-x-[16px]">
          <div className="inline-flex text-[16px] gap-x[5px]">
            <i className="fa-solid text-yellow-400 fa-star" />
            <i className="fa-solid text-yellow-400 fa-star" />
            <i className="fa-solid text-yellow-400 fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
          </div>
          <div className="text-[14px]">
            <span className="opacity-50 text-[14px]">(150 Reviews)</span>
          </div>
          <div className="text-[#00FF66] text-[14px] border-l-[1px]">
            <span className="ml-[16px]">In stock</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductInfo