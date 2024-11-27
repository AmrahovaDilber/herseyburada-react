function DeliveryInfo() {
  return (
    <div className="w-full border rounded-lg ">
      <div className="flex flex-col sm:flex-row items-center gap-4 py-6 px-4 sm:px-6 border-b">
        <div className="flex items-center justify-center ">
          <i className="fa-solid fa-truck text-3xl" />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-medium">
            Pulsuz Çatdırılma{" "}
          </h4>
          <p className="text-sm text-gray-600 dark:text-[#c7c6c6]">
            Çatdırılma Mövcudluğu üçün poçt kodunuzu daxil edin
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 py-6 px-4 sm:px-6">
        <div>
          <img src="/Icon-return.svg" alt="Return Icon" className="h-8 w-8 dark:bg-[#fff]" />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-medium">Geri Çatdırılma</h4>
          <p className="text-sm text-gray-600 dark:text-[#c7c6c6]">
            30 Gün ərzində Pulsuz Çatdırılma. Təfərrüatlar
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
