function DeliveryInfo() {
  return (
    <div className="w-full h-[180px] border rounded-[4px] mt-[40px]">
      <div className="flex items-center gap-x-[16px] py-[24px] px-[16px] border-b-[1px]">
        <div>
          <i className="flex items-center justify-center pt-[5px] fa-solid fa-truck text-[30px]" />
        </div>
        <div>
          <h4 className="text-[16px] font-[500]">Free Delivery</h4>
          <p className="text-[12px] font-[500]">
            Enter your postal code for Delivery Availability
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-[16px] py-[24px] px-[16px]">
        <div>
          <img src="./assets/img/Icon-return.svg" alt="" />
        </div>
        <div>
          <h4 className="text-[16px] font-[500]">Return Delivery</h4>
          <p className="text-[12px] font-[500]">
            Free 30 Days Delivery Returns. Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
