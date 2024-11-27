import { Link } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";

export default function ProductItem({ product }) {
  const {
    addToCart,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
    isFavorited,
    isInCart,
  } = useContextApp();

  const averageRating =
    product.reviews.length > 0
      ? product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length
      : 0;

  const getStarColor = (index) => {
    return index < Math.round(averageRating) ? "#fbd439" : "#CCCCCC";
  };

  return (
    <div className="group relative shadow-lg rounded-lg overflow-hidden bg-white  transition-all duration-300 hover:scale-105">
      <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] ">
        <div className="w-[55px] h-[26px] z-30 bg-[#FF7518] rounded-md absolute top-[12px] left-[8px]">
          <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
            -{product.discount ? product.discount.toFixed(0) : 0}%
          </p>
        </div>
        <Link
          className="absolute inset-0 flex justify-center items-center"
          to={`/productdetails/${product.slug}`}
        >
          <figure className="w-full h-full aspect-auto transition-transform duration-300 group-hover:scale-105">
            <img
              src={product.image_url}
              className="w-full h-full object-cover"
              alt={product.product_name}
            />
          </figure>
        </Link>
        <figure className="size-[34px] rounded-full bg-white dark:bg-[#121212] absolute top-[12px] right-[12px] flex items-center justify-center">
          {!isFavorited(product.product_id) ? (
            <button
              onClick={() => addToFavorites(product.product_id)}
              className="text-[#FF7518] text-[23px] transition-all duration-300 hover:text-red-500"
            >
              <IoMdHeartEmpty />
            </button>
          ) : (
            <button
              onClick={() => removeFromFavorites(product.product_id)}
              className="text-red-500 text-[23px] transition-all duration-300"
            >
              <IoMdHeart />
            </button>
          )}
        </figure>

        <div className="absolute bottom-[-10px] py-[8px] hidden group-hover:flex space-x-[3px] items-center justify-center w-full bg-black dark:bg-[#202020]">
          <figure className="size-[24px] text-white">
            <img src="/sebet.svg" className="object-cover" />
          </figure>
          {isInCart(product.product_id) ? (
            <button
              onClick={() => removeFromCart(product.product_id)}
              className="text-white text-[12px] font-normal"
            >
              Səbətdən Sil
            </button>
          ) : (
            <button
              onClick={() => addToCart(product.product_id)}
              className="text-white text-[12px] font-normal"
            >
              Səbətə Əlavə et
            </button>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col dark:bg-[#252525]">
        <p className="font-semibold text-[16px] text-[#000000] dark:text-[#FAFAFA] mb-[8px] line-clamp-1">
          {product.product_name}
        </p>
        <div className="space-x-[12px] flex items-center mb-[8px]">
          <p className="text-[17px] font-medium text-[#FF7518]">
            ${product.price}
          </p>
          <p className="text-[14px] font-medium text-[#a7a7a7] dark:text-gray-400 line-through">
            ${product.original_price}
          </p>
        </div>
        <div className="flex items-center mb-[8px]">
          <p className="text-[12px] sm:text-[14px] mt-1 text-[#7F7F7F] dark:text-gray-400 font-semibold">
            {averageRating.toFixed(1)}
          </p>
          <div className="flex space-x-[2px] sm:space-x-[4px] ml-2">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index}>
                <FaStar
                  className="fa-regular fa-star w-[12px] sm:w-[14px]"
                  style={{ color: getStarColor(index), objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
          <div className="text-[13px] text-[#7F7F7F] dark:text-gray-400 ml-0 sm:ml-1 mt-1">
            ({product.reviews.length})
          </div>
        </div>
      </div>
    </div>
  );
}
