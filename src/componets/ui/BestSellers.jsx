import ProductList from "./ProductList";
import TitleSubtitle from "./TitleSubtitle";
import { useContextApp } from "../../context/AppContext";

export default function BestSellers() {

  const { sortedSellerProducts } = useContextApp();
  const slicedArr=sortedSellerProducts.slice(0,4)
  return (
    <div>
      <TitleSubtitle subtitle="Bu ay" title="Ən çox satılanlar">
      <div className="space-x-[8px] flex items-center">
          <figure className="bg-[#F5F5F5] size-[46px] rounded-full text-black flex justify-center items-center cursor-pointer">
            <img src="/icons_arrow-left.svg" alt="Previous" />
          </figure>
          <figure className="bg-[#F5F5F5] size-[46px] rounded-full text-black flex justify-center items-center cursor-pointer">
            <img src="/icons_arrow-right.svg" alt="Next" />
          </figure>
        </div>
      </TitleSubtitle>
      <ProductList products={slicedArr} />
    </div>
  );
}
