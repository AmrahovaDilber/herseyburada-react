import Account from "../componets/ui/Account";
import CartPage from "../componets/ui/CartPage";
import Filter from "../componets/ui/Filter";
import ProductDetails from "../componets/ui/ProductDetails";
import SignUp from "../componets/ui/SignUp";
import Wishlist from "../componets/ui/Wishlist";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
const routers = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/productdetails",
    element: <ProductDetails></ProductDetails>,
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

export default layoutRouter(routers)
