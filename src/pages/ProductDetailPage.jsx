import ProductDetail from "../componets/ui/ProductDetail";
import ProductList from "../componets/ui/ProductList";
import TitleSubtitle from "../componets/ui/TitleSubtitle";

export default function ProductDetailPage() {
  return (
    <div className="flex flex-col w-[1200px]">
      <ProductDetail></ProductDetail>
      <TitleSubtitle subtitle="Trenddə" />
      <ProductList />
    </div>
  );
}
