import { useState, createContext, useContext, useEffect } from "react";
import { notification } from "../utils/helper";
import {  useForm } from "react-hook-form";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import data from "../data/categoriesData";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [allData, setAllData] = useState(data);
  const [products, setProducts] = useState(
    allData.kateqoriyalar.flatMap((category) =>
      category.subkateqoriyalar.flatMap((subcategory) => subcategory.məhsullar)
    )
  );
  // !!!!!!!!!!!!!!!!!!!!!!Product Filtering!!!!!!!!!!!!!!!
  const [selectedPrice, setSelectedPrice] = useState([0, 2000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Qadın");

  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [maxPrice, setMaxPrice] = useState(2000);

  const handleFilterPrice = (price) => {
    setMaxPrice(price);
  };

  const handleCategoryChange = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  // Filter For the Categories
  const handleFilterCategory = () => {
    if (selectedCategories.length === 0) {
      return products;
    }
    return allData.kateqoriyalar
      .filter((category) =>
        selectedCategories.includes(category.kateqoriya_adı)
      )
      .flatMap((category) =>
        category.subkateqoriyalar.flatMap(
          (subcategory) => subcategory.məhsullar
        )
      );
  };

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
    const product = products.find((prod) => prod.product_id === id);

    if (product) {
      if (!carts.includes(id)) {
        const updatedBaskets = [...carts, id];
        saveCart(updatedBaskets);
        fetchProducts(updatedBaskets);
        notification(`${product.product_name} added to cart`);
      } else {
        notification(`${product.product_name} is already in the cart`);
      }
    } else {
      notification(`Product not found`);
    }
  };

  const removeFromCart = (id) => {
    const updatedBaskets = carts.filter((item) => item !== id);
    const product = products.find((prod) => prod.product_id === id);

    if (product) {
      saveCart(updatedBaskets);
      fetchProducts(updatedBaskets);
      notification(`${product.product_name} removed from cart`);
    } else {
      notification(`Product not found`);
    }
  };

  const fetchProducts = (updatedBaskets) => {
    const updatedProducts = products.map((product) => ({
      ...product,
      isBasket: updatedBaskets.includes(product.product_id),
    }));
    setProducts(updatedProducts);
  };

  const fetchCartProducts = () => {
    return products.filter((product) => carts.includes(product.product_id));
  };

  const addToFavorites = (id) => {
    const findProduct = products.find((product) => product.product_id === id);

    if (findProduct) {
      if (!favorites.includes(id)) {
        const updatedFavorites = [...favorites, id];
        saveFavorites(updatedFavorites);
        notification(
          `${findProduct.product_name} adlı məhsul sevimlilərə əlavə olundu`
        );
      }
    } else {
      notification(`Product not found`);
    }
  };

  const removeFromFavorites = (id) => {
    const findProduct = products.find((product) => product.product_id === id);

    if (findProduct) {
      const updatedFavorites = favorites.filter(
        (productId) => productId !== id
      );
      saveFavorites(updatedFavorites);
      notification(
        `${findProduct.product_name} adlı məhsul sevimlilərdən çıxarıldı`
      );
    } else {
      notification(`Product not found`);
    }
  };

  const fetchFavoritesProducts = () => {
    return products.filter((product) => favorites.includes(product.product_id));
  };

  const isFavorited = (id) => {
    return favorites.includes(id);
  };

  // Endirimler
  const discountedProducts = products.filter(
    (item) => item && item.discount > 0
  );
  const sortedDiscountedProducts = discountedProducts.sort(
    (a, b) => b.discount - a.discount
  );

  // Best sellers

  const sellerProducts = products.filter((item) => item && item.salesCount > 0);
  const sortedSellerProducts = [...sellerProducts].sort(
    (a, b) => b.salesCount - a.salesCount
  );

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Register!!!!!!!!!!!!!!!!!!!!!!!!!
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

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!1!! Login Form Hook!!!!!!!!!!!!!!!!!!!!!!
  const loginForm = useForm();

  const {
    register: loginUser,
    handleSubmit: handleLoginSubmit,
    formState: loginFormState,
    watch: watchLogin,
  } = loginForm;

  const { errors: loginErrors } = loginFormState;

  // new
  // Filter for the colors
  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  // Filter for the Size
  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
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
            : [],
        }))
        .filter((subcategory) => subcategory.mahsullar.length > 0),
    }))
    .filter((category) => category.subkateqoriyalar.length > 0);

  const values = {
    products,
    setProducts,
    allData,
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
    selectedCategories,
    // handleFilterColor,
    handleFilterPrice,
    maxPrice,
    handleCategoryChange,
    sortedDiscountedProducts,
    sortedSellerProducts,

    // new
    selectedColors,
    setSelectedColors,
    handleColorChange,
    selectedSizes,
    setSelectedSizes,
    handleSizeChange,
    selectedPrice,
    setSelectedPrice,
    selectedCategory,
    setSelectedCategory,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useContextApp = () => useContext(AppContext);
