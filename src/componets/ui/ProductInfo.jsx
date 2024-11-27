function ProductInfo({ findProduct }) {
  return (
    <div className="space-y-2">
      <div className="text-lg sm:text-xl lg:text-2xl font-semibold mb- text-gray-900 dark:text-[#fff]">
        {findProduct.product_name}
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-4 sm:gap-6">

        <div className="inline-flex text-yellow-500 space-x-1">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
     
    
        <div className="text-green-500 font-medium border-t sm:border-t-0 sm:border-l pl-0 sm:pl-4 pt-2 sm:pt-0">
          {findProduct.stockStatus}
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
