import { useEffect, useState } from "react";
import { useContextApp } from "../context/AppContext";
import ProductItem from "../componets/ui/ProductItem";

export default function WishList() {
  const { fetchFavoritesProducts, favorites, products } = useContextApp();

  const [favoritesProducts, setFavoritesProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = fetchFavoritesProducts();
    setFavoritesProducts(fetchedProducts);
  }, [favorites, products, fetchFavoritesProducts]);

  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto  md:px-0">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <p className="text-2xl font-semibold text-gray-800 dark:text-white">
            Sevimlilər ({favoritesProducts.length})
          </p>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
          {favoritesProducts.map((product, index) => (
            <ProductItem
              product={product}
              key={product.product_id}
              index={index}
            />
          ))}
        </div>
        {favoritesProducts.length === 0 && (
          <div className="flex justify-center items-center h-80 rounded-lg">
            <p className="text-gray-600 dark:text-[#fff] text-lg font-semibold">
              Sevimlilər siyahınız boş görünür, amma mükəmməl seçimlər var!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
