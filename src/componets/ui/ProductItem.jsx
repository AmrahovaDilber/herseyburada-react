
import { Link } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";

export default function ProductItem({ product }) {
  const {addToCart , removeFromCart } = useContextApp();

  return (
    <div>
      <div className="h-[360px] relative shadow-lg">
        <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] group">
          <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
            <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
              -{product.discount}%
            </p>
          </div>
          <Link
            className="absolute inset-0  flex justify-center items-center "
            to={`/productdetails/${product.slug}`}
          >
            <figure className="w-[190px] h-[180px]">
              <img
                src={product.imageUrl}
                className="object-cover"
                alt={product.name}
              />
            </figure>
          </Link>

          <figure className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
            <img src="/heart.svg" className="object-cover" />
          </figure>
          <div className="absolute bottom-0 py-[8px] hidden group-hover:flex space-x-[3px] items-center justify-center w-full bg-[#000000]">
            <figure className="size-[24px] text-white">
              <img src="/sebet.svg" className="object-cover" />
            </figure>
            {product.isBasket && (
              <Link
                onClick={() => removeFromCart(product.id)}
                className="text-[#FFFF] text-[12px] font-normal"
              >
                Remove From Cart
              </Link>
            )}
            {!product.isBasket && (
              <Link
                onClick={() => addToCart (product.id)}
                className="text-[#FFFF] text-[12px] font-normal"
              >
                Add To Cart
              </Link>
            )}
          </div>
        </div>
        <div className="p-3 flex flex-col">
          <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
            {product.name}
          </p>
          <div className="space-x-[12px] flex items-center mb-[8px]">
            <p className="text-[16px] font-medium text-[#FF7518]">
              ${product.currentPrice}
            </p>
            <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
              ${product.originalPrice}
            </p>
          </div>
          <div className="flex space-x-[8px] items-center">
            <div className="w-[100px] flex space-x-[8px]">
              {Array.from({ length: 5 }, (_, index) => (
                <div key={index} className="w-[10px]">
                  <i className="text-[14px] fa-regular fa-star"></i>
                </div>
              ))}
            </div>
            <p className="text-[#7F7F7F] font-semibold">
              ({product.reviewCount})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
