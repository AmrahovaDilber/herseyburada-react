import { useContextApp } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

export default function FavoriteItem({ product,index }) {
  const {
    isFavorited,
    addToFavorites,
    removeFromFavorites,
    removeFromCart,
    addToCart,
  } = useContextApp();

  return (
    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <div className="relative flex items-center justify-center h-64 bg-[#F5F5F5] group">
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs py-1 px-2 rounded-md">
            -{product.discount}%
          </div>
          <Link
            to={`/productdetails/${product.slug}`}
            className="absolute inset-0 flex justify-center items-center"
          >
            <figure className="w-full h-full">
              <img
                src={product.image_url}
                className="w-full h-full object-cover"
                alt={product.product_name}
              />
            </figure>
          </Link>
          <figure className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
            {!isFavorited(product.product_id) ? (
              <button
                onClick={() => addToFavorites(product.product_id)}
                className="size-[23px]"
              >
                <IoMdHeartEmpty className="size-full" />
              </button>
            ) : (
              <button
                onClick={() => removeFromFavorites(product.product_id)}
                className="size-[23px]"
              >
                <IoMdHeart className="size-full text-red-500" />
              </button>
            )}
          </figure>

          <div className="absolute bottom-0 py-[8px] hidden group-hover:flex space-x-[3px] items-center justify-center w-full bg-[#000000]">
            <figure className="size-[24px] text-white">
              <img src="/sebet.svg" className="object-cover" />
            </figure>
            {product.isBasket ? (
              <button
                onClick={() => removeFromCart(product.product_id)}
                className="text-[#FFFF] text-[12px] font-normal"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(product.product_id)}
                className="text-[#FFFF] text-[12px] font-normal"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>

        <div className="p-4">
          <p className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
            {product.product_name}
          </p>
          <div className="flex items-center mb-2">
            <p className="text-xl font-semibold text-orange-500">
              ${product.price}
            </p>
            <p className="text-lg font-medium text-gray-500 line-through ml-2">
              ${product.original_price}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {Array.from({ length: 5 }, (_, index) => (
                <i
                  key={index}
                  className="text-sm fa-regular fa-star text-yellow-400"
                ></i>
              ))}
            </div>
            {product.reviews.map((rew,index) => (
                <p key={index} className="text-[#7F7F7F] font-semibold">
                ({rew.rating})
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
