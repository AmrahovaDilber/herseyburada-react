import { useParams } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";

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
        products.map((product) => (
          <div key={product.product_id}>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5]">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -{product.discount}%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img
                  src={product.image_url}
                  className="object-cover"
                  alt={product.product_name}
                />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                {product.product_name}
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">
                  ${product.price}
                </p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  ${product.original_price}
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Bu kateqoriya üçün məhsul yoxdur.</p>
      )}
    </div>
  );
}
