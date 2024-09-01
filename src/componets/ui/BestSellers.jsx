import ProductList from "./ProductList";
import TitleSubtitle from "./TitleSubtitle";
import { useContextApp } from "../../context/AppContext";

export default function BestSellers() {

  const { products } = useContextApp();
  return (
    <div>
      <TitleSubtitle subtitle="Bu ay" title="Ən çox satılanlar">
        <button className="h-[56px] w-[159px] bg-[#FF7518] hover:bg-[#e07575] rounded-md text-[#FAFAFA] text-[16px] font-medium text-center">
          Hamısını göstər
        </button>
      </TitleSubtitle>
      <ProductList products={products} />
    </div>
  );
}
