import { useEffect, useState } from "react";
import { useContextApp } from "../context/AppContext";
import FavoriteItem from '../componets/ui/FavoriteItem'

export default function WishList() {
  const {
    fetchFavoritesProducts,
    favorites,
    products,
    carts,
    saveCart,
    fetchProducts,
  } = useContextApp();

  const [favoritesProducts, setFavoritesProducts] = useState([]);

  useEffect(() => {
    setFavoritesProducts(fetchFavoritesProducts());
  }, [favorites, products]);

  function addToBag() {
    const updatedCarts = [...carts];
    favoritesProducts.forEach((product) => {
      if (!updatedCarts.includes(product.product_id)) {
        updatedCarts.push(product.product_id);
      }
    });
    saveCart(updatedCarts);
    fetchProducts(updatedCarts);
  }

  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <p className="text-2xl font-semibold text-gray-800">
            Wishlist ({favoritesProducts.length})
          </p>
          <button
            onClick={addToBag}
            className="mt-4 sm:mt-0 py-2 px-4 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition duration-200"
          >
            Move All To Bag
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favoritesProducts.map((product, index) => (
            <FavoriteItem product={product} key={index} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
