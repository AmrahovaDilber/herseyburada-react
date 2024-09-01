function ProductOptions({findProduct}) {
  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="text-2xl">
          <p>Colours:</p>
        </div>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            name="color"
            defaultValue="blue"
            className="hidden peer"
          />
          <div className="w-8 h-8 rounded-full bg-[#A0BCE0] border border-black flex items-center justify-center peer-checked:p-2 peer-checked:w-8 peer-checked:h-8 peer-checked:bg-[#A0BCE0] peer-checked:border-black peer-checked:ring-2 peer-checked:ring-black cursor-pointer transition-all duration-200">
            <div className="hidden peer-checked:block w-4 h-4 rounded-full bg-[#A0BCE0]" />
          </div>
        </label>
        <label className="inline-flex items-center ml-2">
          <input
            type="radio"
            name="color"
            defaultValue="red"
            className="hidden peer"
          />
          <div className="w-8 h-8 rounded-full bg-[#E07575] border border-black flex items-center justify-center peer-checked:w-8 peer-checked:h-8 peer-checked:bg-[#E07575] peer-checked:border-black peer-checked:ring-2 peer-checked:ring-black cursor-pointer transition-all duration-200">
            <div className="hidden peer-checked:block w-4 h-4 rounded-full bg-[#E07575]" />
          </div>
        </label>
      </div>
      <div className="flex items-center mb-[24px]">
        <p className="text-xl mr-6">Size:</p>
        <div className="flex">
          {findProduct.sizes.map((size) => (
            <label
              key={size}
              className="inline-flex items-center justify-center border w-8 h-8 rounded mr-4 cursor-pointer"
            >
              <input type="radio" name="size" className="hidden" />
              <p className="text-sm">{size}</p>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductOptions;
