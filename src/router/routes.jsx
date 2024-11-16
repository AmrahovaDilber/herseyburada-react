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
    layout:"App"
  },
  {
    path: "/productdetails/:slug",
    element: <ProductDetail></ProductDetail>,
     layout:"App"
  },
  {
    path: "/filter",
    element: <FilterPage></FilterPage>,
     layout:"App"
  },
  {
    path: "/products/:slug/:subcategorySlug?",
    element: <FilterPage />,
     layout:"App"
  },
  {
    path: "/subcategories/:slug",
    element: <FilterPage></FilterPage>,
     layout:"App"
  },
  {
    path: "/contact",
    element: <ContactPage></ContactPage>,
     layout:"App"
  },
  {
    path: "/cartpage",
    element: <CartPage></CartPage>,
     layout:"App"
  },
  {
    path: "/wishlist",
    element: <WishList></WishList>,
     layout:"App"
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
     layout:"App"
  },
  {
    path: "/gizliliksiyaseti",
    element: <GizlilikSiyaseti></GizlilikSiyaseti>,
     layout:"App"
    
  },
  {
    path: "/istifadesertleri",
    element: <IstifadeSertleri></IstifadeSertleri>,
     layout:"App"
  },

];

const layoutRouter = (routers) => {
  return routers.map((router) => {
    if (router.layout && router.layout === 'App') {
      router.element = (
        <AppContextProvider>
          <AppLayout>{router.element}</AppLayout>
        </AppContextProvider>
      );
    } else {
      router.element = (
        <AppContextProvider>
          {router.element}
        </AppContextProvider>
      );
    }
    return router;
  });
};


export default layoutRouter(routers);
