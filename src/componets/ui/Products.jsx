import { useParams } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function Products() {
  const { slug, subcategorySlug } = useParams();
  const {
    allData,
    query,
    selectedCategories,
    selectedColors,
    maxPrice,
    selectedSizes,
    handleFilterCategory,
  } = useContextApp();

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let products = [];

    // Initial product selection based on categories or slugs
    if (selectedCategories.length > 0) {
      products = handleFilterCategory();
    } else if (slug && !subcategorySlug) {
      const category = allData.kateqoriyalar.find(
        (item) => item.kateqoriya_adı === slug
      );
      products = category
        ? category.subkateqoriyalar.flatMap((subcat) => subcat.məhsullar)
        : [];
    } else if (subcategorySlug) {
      products = allData.kateqoriyalar.flatMap((item) =>
        item.subkateqoriyalar.flatMap((subcat) =>
          subcat.subkateqoriya_adı === subcategorySlug ? subcat.məhsullar : []
        )
      );
    } else {
      products = allData.kateqoriyalar.flatMap((category) =>
        category.subkateqoriyalar.flatMap(
          (subcategory) => subcategory.məhsullar
        )
      );
    }

    // Search query filter
    if (query) {
      products = products.filter((product) =>
        product.product_name.toLowerCase().includes(query.toLowerCase())
      );
    }


    // Color filter
    if (selectedColors.length > 0) {
      products = products.filter((product) =>
        selectedColors.some((color) =>
          (product.colors || [])
            .map((c) => c.toLowerCase())
            .includes(color.toLowerCase())
        )
      );
    }

    // Apply price filter
    products = products.filter((product) => product.price <= maxPrice);

    // Apply size filter
    if (selectedSizes.length > 0) {
      products = products.filter((product) =>
        selectedSizes.some((size) =>
          (product.sizes || [])
            .map((s) => s.toLowerCase())
            .includes(size.toLowerCase())
        )
      );
    }

    setFilteredProducts(products);
  }, [
    query,
    selectedCategories,
    selectedColors,
    slug,
    subcategorySlug,
    allData,
    maxPrice,
    selectedSizes,
    handleFilterCategory,
  ]);

  return (
    <div className="products-page">
      <div className="products border border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-[30px] shadow-md rounded-lg p-4 bg-white">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))
        ) : (
          <p>No products available for this category.</p>
        )}
      </div>
    </div>
  );
}