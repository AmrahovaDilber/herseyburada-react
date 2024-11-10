import { Link } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import ProductList from "./ProductList";
import TitleSubtitle from "./TitleSubtitle";

export default function ExploreProducts() {
  const { products } = useContextApp();
  const slicedArr=products.slice(0,12)
  return (
    <div>
      <TitleSubtitle subtitle="Məhsullarımız" title="Məhsullarımızı kəşf et">
      </TitleSubtitle>
      <ProductList products={slicedArr} />
      <Link to={`products/Qadın`}>
      <div className="mx-auto w-[234px] my-[60px]">
        <button className="h-[56px] w-[234px] bg-[#FF7518] hover:bg-[#d46215] hover:translate-y-[-6px] transition duration-300 rounded-md text-[#FAFAFA] text-[16px] font-medium text-center">
          Hamısını göstər
        </button>
      </div></Link>
    </div>
  );
}
