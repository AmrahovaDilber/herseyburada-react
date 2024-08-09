import ProductList from "./ProductList";
import TitleSubtitle from "./TitleSubtitle";

export default function Sales() {
  return (
    <div>
      <TitleSubtitle subtitle="Trendde" title="Endirimler">
        <div className="space-x-[8px] flex items-center">
          <figure className="bg-[#F5F5F5] size-[46px] rounded-full text-black flex justify-center items-center cursor-pointer"z>
            <img src="/public/icons_arrow-left.svg" alt="Previous" />
          </figure>
          <figure className="bg-[#F5F5F5] size-[46px] rounded-full text-black flex justify-center items-center cursor-pointer">
            <img src="/public/icons_arrow-right.svg" alt="Next" />
          </figure>
        </div>
      </TitleSubtitle>
      <ProductList />
      <div className="mx-auto w-[234px] my-[60px]">
        <button className="h-[56px] w-[234px] bg-[#FF7518] hover:bg-[#e07575] rounded-md text-[#FAFAFA] text-[16px] font-medium text-center">
          Hamısını göstər
        </button>
      </div>
    </div>
  );
}
