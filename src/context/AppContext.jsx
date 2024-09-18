import { useState, createContext, useContext, useEffect } from "react";
import { notification } from "../utils/helper";
import PRODUCTS from "../constant/product";
import { set, useForm } from "react-hook-form";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import data from "../data/categoriesData";
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
    return products.filter((product) => favorites.includes(product.id));
  };
  const isFavorited = (id) => {
    return favorites.includes(id);
  };

  // !!!!!!!!!!!!!!!!!!!!!!Product Filtering!!!!!!!!!!!!!!!
  const [allData, setAllData] = useState(data);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [maxPrice, setMaxPrice] = useState(2000);

  const handleFilterPrice = (price) => {
    setMaxPrice(price);
  };
  // Filter For the Categories
  function handleFilterCategory(categoryName) {
    const filteredProducts =
      allData.kateqoriyalar
        .find((category) => category.kateqoriya_adı === categoryName)
        ?.subkateqoriyalar.flatMap((subcategory) => subcategory.məhsullar) ||
      [];

    setAllData(filteredProducts);
    setSelectedCategory(categoryName);
  }
  // Filter For the Colors
  const handleFilterColor = (color) => {
    if (selectedColor === color) {
      setSelectedColor("");
    } else {
      setSelectedColor(color);
    }
  };


  // FILTER FOR THE INPUT
  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  const filteredInputItems = allData.kateqoriyalar
    .map((category) => ({
      ...category,
      subkateqoriyalar: category.subkateqoriyalar
        .map((subcategory) => ({
          ...subcategory,
          // Check if mahsullar exists before filtering
          mahsullar: Array.isArray(subcategory.mahsullar)
            ? subcategory.mahsullar.filter((product) =>
                product.product_name.toLowerCase().includes(query.toLowerCase())
              )
            : [], // If mahsullar is undefined or not an array, return an empty array
        }))
        .filter((subcategory) => subcategory.mahsullar.length > 0), // Remove subcategories with no matching products
    }))
    .filter((category) => category.subkateqoriyalar.length > 0); // Remove categories with no matching subcategories

  //!!!!!!!!!!!!!!!!!!!! Register!!!!!!!!!!!!!!!!!!!!!
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }
  const registerForm = useForm();
  const {
    register: registerUser,
    handleSubmit: handleRegisterSubmit,
    formState: registerFormState,
    watch: watchRegister,
    // setValue: setRegisterValue,
  } = registerForm;

  const { errors: registerErrors } = registerFormState;

  //!!!!!!!!!!!!!!! Login Form Hook!!!!!!!!!!!!!!!
  const loginForm = useForm();

  const {
    register: loginUser,
    handleSubmit: handleLoginSubmit,
    formState: loginFormState,
    watch: watchLogin,
  } = loginForm;

  const { errors: loginErrors } = loginFormState;

  const values = {
    allData,
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
    saveCart,
    // register
    registerUser,
    handleRegisterSubmit,
    registerErrors,
    watchRegister,
    // login
    loginUser,
    handleLoginSubmit,
    loginErrors,
    currentUser,
    userLoggedIn,
    watchLogin,
    loading,

    // FILTER
    handleFilterCategory,
    query,
    handleInputChange,
    filteredInputItems,
    selectedCategory,
    handleFilterColor,
    selectedColor,
    handleFilterPrice,
    maxPrice,
    selectedSizes,
    setSelectedSizes,
   
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useContextApp = () => useContext(AppContext);
