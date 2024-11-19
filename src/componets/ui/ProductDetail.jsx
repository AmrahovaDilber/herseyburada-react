import ProductInfo from "../ui/ProductInfo";
import ProductOptions from "../ui/ProductOptions";
import DeliveryInfo from "../ui/DeliveryInfo";
import { useParams } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { BsCartPlus } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Review from "./Review";

export default function ProductDetail() {
  const { products, addToCart, addToFavorites } = useContextApp();
  const { slug } = useParams();
  const findProduct = products.find((product) => product.slug === slug);

  return (
    <div className="flex flex-col">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-[50px]  my-12 max-w-7xl px-4 sm:px-6 lg:px-0">
        
        {/* Product Images */}
        <div className="w-full lg:w-[40%] rounded-lg overflow-hidden ">
          <figure className="h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
            <img
              src={findProduct.image_url}
              alt={findProduct.product_name}
              className="w-full h-full rounded-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </figure>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-[60%] space-y-6">
          <ProductInfo findProduct={findProduct} />

          {/* Product Price and Description */}
          <div className="space-y-4 border-b pb-6">
            <div className="flex items-center gap-4">
              <div className="text-sm md:text-base font-medium text-gray-500 line-through">
                ${findProduct.original_price}
              </div>
              <span className="text-sm md:text-base font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-md">
                -{findProduct.discount ? findProduct.discount.toFixed(0) : 0}%
              </span>
            </div>
            <div className="text-xl font-bold text-gray-800">
              ${(
                findProduct.original_price - 
                (findProduct.original_price * findProduct.discount) / 100
              ).toFixed(2)}
            </div>
          </div>

          <ProductOptions findProduct={findProduct} />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 my-6">
            <button
              onClick={() => addToCart(findProduct.product_id)}
              className="bg-orange-500 w-full sm:w-[48%] flex items-center justify-center gap-2 text-white px-5 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
            >
              <BsCartPlus className="text-[22px]" />
              Səbətə Əlavə Et
            </button>

            <button
              onClick={() => addToFavorites(findProduct.product_id)}
              className="bg-gray-200 w-full sm:w-[48%] flex items-center justify-center gap-2 text-gray-700 px-5 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
            >
              <FaRegHeart className="text-[22px]" />
              Seçilmişlərə Əlavə Et
            </button>
          </div>

          <DeliveryInfo />
        </div>
      </div>
      
      {/* Review Section */}
      <Review findProduct={findProduct} />
    </div>
  );
}