import { Link } from "react-router-dom";


export default function ProductItem({ product }) {
  const {
    name,
    discount,
    currentPrice,
    originalPrice,
    rating,
    reviewCount,
    imageUrl,
    // detailsUrl,
  } = product;

  return (
    <div>
      <div className="h-[360px] relative shadow-lg">
        <Link to={'/productdetails'}
          className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] group"
        >
          <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
            <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
              -{discount}%
            </p>
          </div>
          <figure className="w-[190px] h-[180px]">
            <img src={imageUrl} className="object-cover" alt={name} />
          </figure>
          <figure className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
            <img src="./assets/img/heart.svg" className="object-cover" />
          </figure>
          <div className="absolute bottom-0 py-[8px] hidden group-hover:flex space-x-[3px] items-center justify-center w-full bg-[#000000]">
            <figure className="size-[24px] text-white">
              <img src="assets/img/sebet.svg" className="object-cover" />
            </figure>
            <p className="text-[#FFFF] text-[12px] font-normal">Add To Cart</p>
          </div>
        </Link>
        <div className="p-3 flex flex-col">
          <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
            {name}
          </p>
          <div className="space-x-[12px] flex items-center mb-[8px]">
            <p className="text-[16px] font-medium text-[#FF7518]">
              ${currentPrice}
            </p>
            <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
              ${originalPrice}
            </p>
          </div>
          <div className="flex space-x-[8px] items-center">
            <div className="w-[100px] flex items-center space-x-2">
              {Array.from({ length: 5 }, (_, index) => (
                <figure key={index} className="w-[20px]">
                  <img
                    className="object-cover"
                    src={`./assets/img/star${index < rating ? "" : "-empty"}.svg`}
                    alt="star"
                  />
                </figure>
              ))}
            </div>
            <p className="text-[#7F7F7F] font-semibold text-[14px]">
              ({reviewCount})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
