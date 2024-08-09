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
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/productdetails",
    element: <ProductDetailPage></ProductDetailPage>,
  },
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
