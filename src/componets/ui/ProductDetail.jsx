import ProductInfo from "../ui/ProductInfo";
import ProductOptions from "../ui/ProductOptions";
import DeliveryInfo from "../ui/DeliveryInfo";
import { useParams } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { FaRegHeart } from "react-icons/fa";
import ReviewandDescription from "./ReviewAndDescription.jsx";

export default function ProductDetail() {
  const { products, addToCart, addToFavorites, isInCart, removeFromCart } =useContextApp();
  const { slug } = useParams();
  const findProduct = products.find((product) => product.slug === slug);

  return (
    <div className="flex flex-col dark:text-[#fff]">
      <div className="flex flex-col lg:flex-row gap-[50px]  my-12 max-w-7xl  sm:px-6 lg:px-0">
        <div className="w-full lg:w-[40%] rounded-lg overflow-hidden ">
          <figure className="h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
            <img
              src={findProduct.image_url}
              alt={findProduct.product_name}
              className="w-full h-full rounded-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </figure>
        </div>

        <div className="w-full lg:w-[60%] space-y-6 ">
          <ProductInfo findProduct={findProduct} />

          <div className="space-y-1 sm:space-y-4 border-b pb-6">
            <div className="flex items-center gap-4">
              <div className="text-sm md:text-base font-medium text-gray-500 dark:text-[#fff] line-through">
                ${findProduct.original_price}
              </div>
              <span className="text-sm md:text-base font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-md">
                -{findProduct.discount ? findProduct.discount.toFixed(0) : 0}%
              </span>
            </div>
            <div className="text-xl font-bold text-gray-800 dark:text-[#fff]">
              $
              {(
                findProduct.original_price -
                (findProduct.original_price * findProduct.discount) / 100
              ).toFixed(2)}
            </div>
          </div>

          <ProductOptions findProduct={findProduct} />

          <div className="flex flex-col sm:flex-row gap-5 justify-between my-6">
            {isInCart(findProduct.product_id) ? (
              <button
                onClick={() => removeFromCart(findProduct.product_id)}
                className="bg-orange-500 w-full sm:w-[48%] flex items-center justify-center gap-2 text-white px-5 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
              >
                Səbətdən Sil
              </button>
            ) : (
              <button
                onClick={() => addToCart(findProduct.product_id)}
                className="bg-orange-500 w-full sm:w-[48%] flex items-center justify-center gap-2 text-white px-5 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
              >
                Səbətə Əlavə et
              </button>
            )}
            <button
              onClick={() => addToFavorites(findProduct.product_id)}
              className="bg-gray-200 w-full sm:w-[48%] flex items-center justify-center gap-2 text-gray-700 px-5 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
            >
              <FaRegHeart className="text-[22px]" />
              Sevimlilərə Əlavə Et
            </button>
          </div>

          <DeliveryInfo />
        </div>
      </div>

      <ReviewandDescription findProduct={findProduct} />
    </div>
  );
}
