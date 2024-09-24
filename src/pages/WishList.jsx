import { useEffect, useState } from "react";
import { useContextApp } from "../context/AppContext";
import FavoriteItem from '../componets/ui/FavoriteItem'

export default function WishList() {
  const {
    fetchFavoritesProducts,
    favorites,
    products,
  } = useContextApp();

  const [favoritesProducts, setFavoritesProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = fetchFavoritesProducts();
    console.log('Fetched favorite products:', fetchedProducts); // Add this line for debugging
    setFavoritesProducts(fetchedProducts);
  }, [favorites, products]);

  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <p className="text-2xl font-semibold text-gray-800">
            Wishlist ({favoritesProducts.length})
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {favoritesProducts.map((product, index) => (
            <FavoriteItem product={product} key={product.product_id} index={index} />
          ))}
        </div>
        {favoritesProducts.length === 0 && (
          <div className="flex justify-center items-center h-80 rounded-lg">
            <p className="text-gray-600 text-lg font-semibold">
              Your Wishlist Is Empty
            </p>
          </div>
        )}
      </div>
    </main>
  );
}