import { useState, useEffect } from "react";
import { useContextApp } from "../../context/AppContext";
import ProductItem from "./ProductItem";
import TitleSubtitle from "./TitleSubtitle";

export default function Sales() {
  const { sortedDiscountedProducts } = useContextApp();
  const [startIndex, setStartIndex] = useState(0);
  const [perIndex, setPerIndex] = useState(4);

  // Function to update perIndex based on screen width
  function updatePerIndex() {
    const width = window.innerWidth;
    if (width >= 1024) {
      setPerIndex(5); // Desktop
    } else if (width >= 640) {
      setPerIndex(3); // Tablet
    } else {
      setPerIndex(2); // Mobile
    }
  }

  // Call updatePerIndex on component mount and on window resize
  useEffect(() => {
    updatePerIndex();
    window.addEventListener("resize", updatePerIndex);
    return () => window.removeEventListener("resize", updatePerIndex);
  }, []);

  function handlePrev() {
    setStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - perIndex : sortedDiscountedProducts.length - perIndex
    );
  }

  function handleNext() {
    setStartIndex((prevIndex) =>
      prevIndex + perIndex < sortedDiscountedProducts.length ? prevIndex + perIndex : 0
    );
  }

  return (
    <div className="">
      <TitleSubtitle subtitle="Bu ay" title="Endirimler">
        <div className="space-x-[8px] flex items-center">
          <figure onClick={handlePrev} className="bg-[#F5F5F5] size-[46px] rounded-full text-black flex justify-center items-center cursor-pointer">
            <img src="/icons_arrow-left.svg" alt="Previous" />
          </figure>
          <figure onClick={handleNext} className="bg-[#F5F5F5] size-[46px] rounded-full text-black flex justify-center items-center cursor-pointer">
            <img src="/icons_arrow-right.svg" alt="Next" />
          </figure>
        </div>
      </TitleSubtitle>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-[35px]">
        {sortedDiscountedProducts.slice(startIndex, startIndex + perIndex).map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
      <div className="mx-auto w-full sm:w-[234px] my-[30px] sm:my-[60px]">
        {/* <button className="w-full sm:w-[234px] h-[56px] bg-[#FF7518] hover:bg-[#e07575] rounded-md text-[#FAFAFA] text-[16px] font-medium text-center">
          Hamısını göstər
        </button> */}
      </div>
    </div>
  );
}
