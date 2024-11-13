import AppLayout from "../layouts/AppLayout";
import AboutPage from "../pages/About";
import CartPage from "../pages/CartPage";
import FilterPage from "../pages/FilterPage";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import WishList from "../pages/WishList";
import ContactPage from "../pages/ContactPage";
import GizlilikSiyaseti from '../pages/GizlilikSiyaseti';
import IstifadeSertleri from '../pages/IstifadeSertleri';
import ProductDetail from "../componets/ui/ProductDetail";
import {  AppContextProvider } from "../context/AppContext";

const routers = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/productdetails/:slug",
    element: <ProductDetail></ProductDetail>,
  },
  {
    path: "/filter",
    element: <FilterPage></FilterPage>,
  },
  {
    path: "/products/:slug/:subcategorySlug?",
    element: <FilterPage />,
  },
  {
    path: "/subcategories/:slug",
    element: <FilterPage></FilterPage>,
  },
  {
    path: "/contact",
    element: <ContactPage></ContactPage>,
  },
  {
    path: "/cartpage",
    element: <CartPage></CartPage>,
  },
  {
    path: "/wishlist",
    element: <WishList></WishList>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },

  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/gizliliksiyaseti",
    element:<GizlilikSiyaseti></GizlilikSiyaseti>
  },
  {
    path: "/istifadesertleri",
    element:<IstifadeSertleri></IstifadeSertleri>
  },

];

const layoutRouter = (routers) => {
  return routers.map((router) => {
    router.element = (
      <AppContextProvider>
        <AppLayout>{router.element}</AppLayout>
      </AppContextProvider>
    );
    return router;
  });
};

export default layoutRouter(routers);
