import { Link } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

export default function ProductItem({ product }) {
  const {
    addToCart,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
    isFavorited,
    isInCart
  } = useContextApp();

  return (
    <div className="h-auto relative shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white">
      <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] group">
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
              className="w-full h-full object-contain"
              alt={product.product_name}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> */}
          </figure>
        </Link>
        <figure className="size-[34px] rounded-full bg-white absolute top-[12px] right-[12px] flex items-center justify-center ">
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

        <div className="absolute bottom-[-10px] py-[8px] hidden group-hover:flex space-x-[3px] items-center justify-center w-full bg-[#000000]">
          <figure className="size-[24px] text-white">
            <img src="/sebet.svg" className="object-cover" />
          </figure>
          {isInCart(product.product_id) ? (
            <button
            onClick={()=>removeFromCart(product.product_id)}
              className="text-[#FFFF] text-[12px] font-normal"
            >
              Səbətdən Sil
            </button>
          ) : (
            <button
            onClick={()=>addToCart(product.product_id)}
              className="text-[#FFFF] text-[12px] font-normal"
            >
             Səbətə Əlavə et
            </button>
          )}
        </div>
      </div>

      <div className="p-3 flex flex-col">
        <p className="font-medium text-[14px] md:text-[16px] text-[#000000] mb-[8px] line-clamp-1">
          {product.product_name}
        </p>
        <div className="space-x-[8px] md:space-x-[12px] flex items-center mb-[8px]">
          <p className="text-[14px] md:text-[17px] font-medium text-[#FF7518]">
            ${product.price}
          </p>
          <p className="text-[14px] md:text-[14px] font-medium text-[#a7a7a7] line-through">
            ${product.original_price}
          </p>
        </div>
        <div className="flex space-x-[8px] items-center">
          <div className="w-[70px] md:w-[100px] flex space-x-[4px] md:space-x-[8px]">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="w-[10px]">
                <i className="text-[12px] md:text-[14px] fa-regular fa-star"></i>
              </div>
            ))}
          </div>
          {product.reviews.map((rew, index) => (
            <p
              key={index}
              className="text-[12px] md:text-[14px] text-[#7F7F7F] font-semibold"
            >
              ({rew.rating})
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
