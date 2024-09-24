import { useState } from "react";
import ProductList from "./ProductList";
import TitleSubtitle from "./TitleSubtitle";
import { useContextApp } from "../../context/AppContext";
import ProductItem from "./ProductItem";

export default function BestSellers() {
  const { sortedSellerProducts } = useContextApp();
  const [startIndex, setStartIndex] = useState(0);
  const perIndex = 5;

  function handlePrev() {
    setStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - perIndex : sortedSellerProducts.length - perIndex
    );
  }

  function handleNext() {
    setStartIndex((prevIndex) =>
      prevIndex + perIndex < sortedSellerProducts.length ? prevIndex + perIndex : 0
    );
  }

  return (
    <div className="container mx-auto ">
      <TitleSubtitle subtitle="Bu ay" title="Ən çox satılanlar">
      <div className="space-x-2 flex items-center">
  <button
    onClick={handlePrev}
    className="bg-[#F5F5F5] w-10 h-10 md:w-12 md:h-12 rounded-full text-black flex justify-center items-center cursor-pointer"
  >
    <img src="/icons_arrow-left.svg" alt="Previous" className="w-4 h-4 md:w-6 md:h-6" />
  </button>
  <button
    onClick={handleNext}
    className="bg-[#F5F5F5] w-10 h-10 md:w-12 md:h-12 rounded-full text-black flex justify-center items-center cursor-pointer"
  >
    <img src="/icons_arrow-right.svg" alt="Next" className="w-4 h-4 md:w-6 md:h-6" />
  </button>
</div>
      </TitleSubtitle>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-[35px]">
        {sortedSellerProducts.slice(startIndex, startIndex + perIndex).map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}