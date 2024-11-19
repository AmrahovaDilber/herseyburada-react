import ProductInfo from "../ui/ProductInfo";
import ProductOptions from "../ui/ProductOptions";
import DeliveryInfo from "../ui/DeliveryInfo";
import { useParams } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { BsCartPlus } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

export default function ProductDetail() {
  const { products, addToCart, addToFavorites } = useContextApp();
  const { slug } = useParams();
  const findProduct = products.find((product) => product.slug === slug);

  return (
    <div className="flex flex-col lg:flex-row gap-[50px] mx-auto my-12 max-w-7xl  sm:px-6">
      {/* Product Images */}
      <div className="w-full lg:w-[40%] rounded-lg overflow-hidden ">
        <figure className="sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center ">
          <img
            src={findProduct.image_url}
            alt={findProduct.product_name}
            className="w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out object-cover sm:object-contain"
          />
        </figure>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-[60%] space-y-5 mt-8 lg:mt-0">
        <ProductInfo findProduct={findProduct} />

        {/* Product Price and Description */}
        <div className="space-y-3 border-b pb-6">
          <div className="flex items-center gap-4">
            <div className="text-sm md:text-base font-medium text-gray-500 line-through">
              ${findProduct.original_price}
            </div>
            <span className="text-sm md:text-base font-semibold text-red-600 bg-red-100 px-2 py-1 rounded-md">
              -{findProduct.discount ? findProduct.discount.toFixed(0) : 0}%
            </span>
          </div>
          <div className="text-lg font-bold text-gray-800">
            $
            {(
              findProduct.original_price -
              (findProduct.original_price * findProduct.discount) / 100
            ).toFixed(2)}
          </div>
      
          {/* <div className="text-sm text-gray-700 leading-relaxed">
            {findProduct.description}
          </div> */}
        </div>

        <ProductOptions findProduct={findProduct} />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between my-8 w-full">
          <button
            onClick={() => addToCart(findProduct.product_id)}
            className="bg-orange-500 w-full sm:max-w-[48%] flex items-center justify-center gap-2 text-white px-4 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-200"
          >
            <BsCartPlus className="text-[20px]" />
            Səbətə Əlavə Et
          </button>

          <button
            onClick={() => addToFavorites(findProduct.product_id)}
            className="bg-gray-200 flex items-center justify-center gap-2 w-full sm:max-w-[48%] text-gray-700 px-4 py-3 rounded-lg shadow hover:bg-gray-300 transition duration-200"
          >
            <FaRegHeart className="text-[20px]" />
            Seçilmişlərə Əlavə Et
          </button>
        </div>
        <DeliveryInfo />
      </div>
    </div>
  );
}
