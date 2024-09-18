import { useParams } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const { slug } = useParams();
  const {
    allData,
    query,
    filteredInputItems,
    selectedCategory,
    selectedColor,
    maxPrice,
      selectedSizes,
      setSelectedSizes
  } = useContextApp();

  const category = allData.kateqoriyalar.find(
    (item) => item.kateqoriya_adı === slug
  );
  const categoryProducts = category
    ? category.subkateqoriyalar.flatMap((subcat) => subcat.məhsullar)
    : [];
    useEffect(() => {
        let filteredProducts = [];
      
        if (query) {
          filteredProducts = filteredInputItems.flatMap((category) =>
            category.subkateqoriyalar.flatMap((subcat) => subcat.mahsullar)
          );
        } else if (selectedCategory) {
          filteredProducts =
            allData.kateqoriyalar
              .find((category) => category.kateqoriya_adı === selectedCategory)
              ?.subkateqoriyalar.flatMap((subcategory) => subcategory.məhsullar) || [];
        } else if (selectedColor) {
          filteredProducts = allData.kateqoriyalar.flatMap((category) =>
            category.subkateqoriyalar.flatMap((subcategory) =>
              subcategory.məhsullar.filter((product) =>
                product.colors.map((c) => c.toLowerCase()).includes(selectedColor.toLowerCase())
              )
            )
          );
        } else if (category) {
          filteredProducts = categoryProducts;
        } else {
          filteredProducts = allData.kateqoriyalar.flatMap((category) =>
            category.subkateqoriyalar.flatMap((subcategory) => subcategory.məhsullar)
          );
        }
      
        // Apply price filter
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= maxPrice
        );
      
        //  size filter
        if (selectedSizes.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            selectedSizes.some((size) =>
              (product.sizes || []).map((c) => c.toLowerCase()).includes(size.toLowerCase())
            )
          );
        }
        setProducts(filteredProducts);
      }, [
        query,
        filteredInputItems,
        selectedCategory,
        selectedColor,
        category,
        allData,
        maxPrice,
        selectedSizes, // Trigger filter when sizes change
      ]);
      
  return (
    <div className="products-page">

      <div className="products border border-gray-200 grid grid-cols-3 gap-[30px] shadow-md rounded-lg p-4 bg-white">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.product_id}>
              <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
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
                {product.colors.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}

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
          <p>No products available for this category.</p>
        )}
      </div>
    </div>
  );
}
