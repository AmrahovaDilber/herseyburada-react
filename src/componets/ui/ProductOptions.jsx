function ProductOptions({ findProduct }) {
  return (
    <div className="space-y-6">
  
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <div className="text-base sm:text-lg font-semibold text-gray-800">Colors:</div>
        <div className="flex flex-wrap gap-4">
    
          <label className="cursor-pointer">
            <input type="radio" name="color" className="hidden peer" />
            <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-gray-300 peer-checked:ring-2 peer-checked:ring-blue-500"></div>
          </label>
          <label className="cursor-pointer">
            <input type="radio" name="color" className="hidden peer" />
            <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-gray-300 peer-checked:ring-2 peer-checked:ring-red-500"></div>
          </label>
        </div>
      </div>

      {/* Size Options */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <div className="text-base sm:text-lg font-semibold text-gray-800">Size:</div>
        <div className="flex flex-wrap gap-2">
          {findProduct.sizes.map((size) => (
            <label key={size} className="cursor-pointer">
              <input type="radio" name="size" className="hidden peer" />
              <div className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 peer-checked:bg-gray-300">
                {size}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductOptions;
