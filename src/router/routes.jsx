import AppLayout from "../layouts/AppLayout";
import AboutPage from "../pages/About";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SignUpPage from "../pages/SignUpPage";
import WishList from "../pages/WishList";
const routers = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/productdetails",
    element: <ProductDetailPage></ProductDetailPage>,
  },
  // {
  //   path: "/filter",
  //   element: <Filter></Filter>,
  // },
  {
    path: "/cartpage",
    element: <CartPage></CartPage>,
  },
  {
    path: "/wishlist",
    element:<WishList></WishList>
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  // {
  //   path: "/account",
  //   element: <Account></Account>,
  // },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
];

const layoutRouter = (routers) => {
  return routers.map((router) => {
    router.element = <AppLayout>{router.element}</AppLayout>;
    return router;
  });
};

export default layoutRouter(routers);
