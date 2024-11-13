// Updated ProductInfo Component
function ProductInfo({ findProduct }) {
  return (
    <div>
      <div className="text-2xl font-semibold mb-4 text-gray-900">
        {findProduct.product_name}
      </div>
      <div className="flex items-center mb-6 gap-6">
        {/* Star Ratings */}
        <div className="inline-flex text-yellow-500 space-x-1">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
        {/* Product Reviews */}
        <div className="text-gray-500">
          {findProduct.reviews.length} review{findProduct.reviews.length !== 1 && 's'}
        </div>
        {/* Stock Status */}
        <div className="text-green-500 font-medium border-l pl-4">
          {findProduct.stockStatus}
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;