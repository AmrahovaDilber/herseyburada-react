import { useState, createContext, useContext, useEffect } from "react";
import { notification } from "../utils/helper";
import { useForm } from "react-hook-form";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import data from "../data/categoriesData";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [allData, setAllData] = useState(data);
  const [products, setProducts] = useState(
    allData.kateqoriyalar.flatMap((category) =>
      category.subkateqoriyalar.flatMap((subcategory) => subcategory.məhsullar)
    )
  );
  const [carts, setCarts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Filter states
  const [selectedPrice, setSelectedPrice] = useState([0, 2000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Qadın");
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(2000);

  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const db = getFirestore();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!userLoggedIn) {
      const localCarts = JSON.parse(localStorage.getItem("carts")) || [];
      const localFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      setCarts(localCarts);
      setFavorites(localFavorites);
    }
  }, [userLoggedIn]);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
      await fetchUserData(user.uid);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
      const localCarts = JSON.parse(localStorage.getItem("carts")) || [];
      const localFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      setCarts(localCarts);
      setFavorites(localFavorites);
    }
    setLoading(false);
  }

  const fetchUserData = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setCarts(userData.carts || []);
        setFavorites(userData.favorites || []);
      } else {
        await setDoc(userDocRef, { carts: [], favorites: [] });
      }
    } catch (error) {
      console.error(
        "İstifadəçi məlumatlarını əldə edərkən xəta baş verdi:",
        error
      );
      notification(
        "İstifadəçi məlumatlarını əldə edərkən xəta baş verdi. Yenidən cəhd edin.",'error'
      );
    }
  };

  const updateUserData = async (newCarts, newFavorites) => {
    if (userLoggedIn && currentUser) {
      try {
        const userDocRef = doc(db, "users", currentUser.uid);
        await updateDoc(userDocRef, {
          carts: newCarts,
          favorites: newFavorites,
        });
      } catch (error) {
        console.error("İstifadəçi məlumatlarının yenilənməsi xətası:", error);
        notification("Data yenilənərkən xəta baş verdi. Yenidən cəhd edin.",'error');
      }
    } else {
      localStorage.setItem("carts", JSON.stringify(newCarts));
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };
 
  const addToCart = async (id) => {
    if (!userLoggedIn) {
      notification("Səbətə əşyalar əlavə etmək üçün daxil olmalısınız","info");
      return;
    }
    console.log("Adding to cart:", id);
    const product = products.find((prod) => prod.product_id === id);

    if (product) {
      if (!carts.includes(id)) {
        const newCarts = [...carts, id];
        setCarts(newCarts);
        console.log("Cart updated:", newCarts);
        await updateUserData(newCarts, favorites);
        notification(`${product.product_name} səbətə əlavə edildi`,    "success");
      } else {
        notification(`${product.product_name} artıq səbətdədir mövcuddur`,"info");
      }
    } else {
      notification(`Məhsul tapılmadı`,'error');
    }
  };

  const removeFromCart = async (id) => {
    const newCarts = carts.filter((item) => item !== id);
    setCarts(newCarts);
    const product = products.find((prod) => prod.product_id === id);

    if (product) {
      await updateUserData(newCarts, favorites);
      notification(`${product.product_name} səbətdən silindi`,"success");
    } else {
      notification("Məhsul tapılmadı","error");
    }
  };
  const isInCart = (id) => {
    return carts.includes(id);
  };
  const fetchCartProducts = () => {
    return products.filter((product) => carts.includes(product.product_id));
  };

  const addToFavorites = async (id) => {
    if (!userLoggedIn) {
      notification(
        "Sevimlilərinizə elementlər əlavə etmək üçün daxil olmalısınız","info"
      );
      return;
    }
    const findProduct = products.find((product) => product.product_id === id);

    if (findProduct) {
      if (!favorites.includes(id)) {
        const newFavorites = [...favorites, id];
        setFavorites(newFavorites);
        await updateUserData(carts, newFavorites);
        notification(`${findProduct.product_name} sevimlilərə əlavə edildi`,"success");
      } else {
        notification(
          `${findProduct.product_name} artıq sevimlilər siyahısındadır`,"info"
        );
      }
    } else {
      notification("Məhsul tapılmadı","error");
    }
  };

  const removeFromFavorites = async (id) => {
    const newFavorites = favorites.filter((favoriteId) => favoriteId !== id);
    setFavorites(newFavorites);
    const findProduct = products.find((product) => product.product_id === id);

    if (findProduct) {
      await updateUserData(carts, newFavorites);
      notification(`${findProduct.product_name} sevimlilərdən silindi`,"success");
    } else {
      notification(`Məhsul tapılmadı`,'error');
    }
  };

  const fetchFavoritesProducts = () => {
    return products.filter((product) => favorites.includes(product.product_id));
  };

  const isFavorited = (id) => {
    return favorites.includes(id);
  };

  const fetchProducts = (updatedCarts) => {
    const updatedProducts = allData.kateqoriyalar.flatMap((category) =>
      category.subkateqoriyalar.flatMap((subcategory) =>
        subcategory.məhsullar.map((product) => ({
          ...product,
          isBasket: updatedCarts.includes(product.product_id),
        }))
      )
    );
    setProducts(updatedProducts);
  };

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

  // Discounted products
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

  // Form hooks
  const registerForm = useForm();
  const {
    register: registerUser,
    handleSubmit: handleRegisterSubmit,
    formState: registerFormState,
    watch: watchRegister,
  } = registerForm;

  const { errors: registerErrors } = registerFormState;

  const loginForm = useForm();
  const {
    register: loginUser,
    handleSubmit: handleLoginSubmit,
    formState: loginFormState,
    watch: watchLogin,
  } = loginForm;

  const { errors: loginErrors } = loginFormState;

  const handleColorChange = (color) => {
    setSelectedColors((selectedColors) =>
      selectedColors.includes(color)
        ? selectedColors.filter((c) => c !== color)
        : [...selectedColors, color]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

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
    selectedCategories,
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
    setCarts,
    darkMode,
    setDarkMode,
    isInCart,
    toggleDarkMode,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useContextApp = () => useContext(AppContext);
