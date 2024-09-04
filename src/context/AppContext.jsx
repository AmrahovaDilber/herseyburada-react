import { useState, createContext, useContext } from "react";
import { notification } from "../utils/helper";
import PRODUCTS from "../constant/product";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const [carts, setCarts] = useState(
    localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : []
  );

  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  const saveFavorites = (items) => {
    localStorage.setItem("favorites", JSON.stringify(items));
    setFavorites(items);
  };

  const saveCart = (items) => {
    localStorage.setItem("carts", JSON.stringify(items));
    setCarts(items);
  };

  const addToCart = (id) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      if (!carts.includes(id)) {
        const updatedBaskets = [...carts, id];
        saveCart(updatedBaskets);
        fetchProducts(updatedBaskets);
        notification(`${product.name} added to cart`);
      }
    } else {
      notification(`Product not found`);
    }
  };

  const removeFromCart = (id) => {
    const updatedBaskets = carts.filter((item) => item !== id);
    const product = products.find((product) => product.id === id);

    if (product) {
      saveCart(updatedBaskets);
      fetchProducts(updatedBaskets);
      notification(`${product.name} removed from cart`);
    } else {
      notification(`Product not found`);
    }
  };

  const fetchProducts = (updatedBaskets) => {
    const items = products.map((product) => ({
      ...product,
      isBasket: updatedBaskets.includes(product.id),
    }));
    setProducts(items);
  };

  const fetchCartProducts = () => {
    return products.filter((product) => carts.includes(product.id));
  };

  const addToFavorites = (id) => {
    const findProduct = products.find((product) => product.id === id);
    if (findProduct) {
      if (!favorites.includes(id)) {
        const updatedFavorites = [...favorites, id];
        saveFavorites(updatedFavorites);
        notification(
          `${findProduct.name} adlı məhsul sevimlilərə əlavə olundu`
        );
      }
    }
  };

  const removeFromFavorites = (id) => {
    const findProduct = products.find((product) => product.id === id);
    const updatedFavorites = favorites.filter((productId) => productId !== id);
    saveFavorites(updatedFavorites);
    notification(`${findProduct.name} adlı məhsul sevimlilərdən çıxarıldı`);
  };


  const fetchFavoritesProducts = () => {
    return products.filter((product)=>favorites.includes(product.id))
  }
  const isFavorited = (id) => {
    return favorites.includes(id);
  };

  const values = {
    products,
    addToCart,
    removeFromCart,
    carts,
    favorites,
    fetchProducts,
    fetchCartProducts,
    addToFavorites,
    removeFromFavorites,
    isFavorited,
    fetchFavoritesProducts,
    saveCart
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useContextApp = () => useContext(AppContext);
