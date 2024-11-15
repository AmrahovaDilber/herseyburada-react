function DeliveryInfo() {
  return (
    <div className="w-full border rounded-lg mt-10">
      <div className="flex flex-col sm:flex-row items-center gap-4 py-6 px-4 sm:px-6 border-b">
        <div className="flex items-center justify-center text-orange-500">
          <i className="fa-solid fa-truck text-3xl" />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-medium">Free Delivery</h4>
          <p className="text-sm text-gray-600">Enter your postal code for Delivery Availability</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 py-6 px-4 sm:px-6">
        <div>
          <img src="/Icon-return.svg" alt="Return Icon" className="h-8 w-8" />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-medium">Return Delivery</h4>
          <p className="text-sm text-gray-600">Free 30 Days Delivery Returns. Details</p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
