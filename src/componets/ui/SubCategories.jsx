import { useParams } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import ProductItem from '../ui/ProductItem'
export default function SubCategories() {
  const { slug } = useParams();
  const { allData } = useContextApp();

  const category = allData.kateqoriyalar.find((category) =>
    category.subkateqoriyalar.some((sub) => sub.subkateqoriya_adı === slug)
  );

  const subcategory = category?.subkateqoriyalar.find(
    (sub) => sub.subkateqoriya_adı === slug
  );

  const products = subcategory ? subcategory.mehsullar : [];

  return (
    <div className="products border border-gray-200 grid grid-cols-3 gap-[30px] shadow-md rounded-lg p-4 bg-white">
      {products.length > 0 ? (
        products.map((product,index) => (
        <ProductItem key={index} product={product}></ProductItem>
        ))
      ) : (
        <p>Bu kateqoriya üçün məhsul yoxdur.</p>
      )}
    </div>
  );
}
