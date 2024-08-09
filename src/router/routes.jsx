
import AppLayout from "../layouts/AppLayout";
import AboutPage from "../pages/About";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";
import ProductDetailPage from "../pages/ProductDetailPage";
const routers = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/productdetails",
    element: <ProductDetailPage></ProductDetailPage>,
  },
  {
    path: "/filter",
    element: <Filter></Filter>,
  },
  {
    path: "/cartpage",
    element: <CartPage></CartPage>,
  },
  {
    path: "/wishlist",
    element: <Wishlist></Wishlist>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/account",
    element: <Account></Account>,
  },
];


const layoutRouter = (routers) => {
  return routers.map((router) => {
    router.element = <AppLayout>{router.element}</AppLayout>;
    return router;
  });
};

export default layoutRouter(routers);
