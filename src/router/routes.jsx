import CheckOutPage from "../componets/ui/CheckOut";
import AppLayout from "../layouts/AppLayout";
import AboutPage from "../pages/About";
import AccountPage from "../pages/AccoutPage";
import CartPage from "../pages/CartPage";
import FilterPage from "../pages/FilterPage";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SignUpPage from "../pages/SignUpPage";
import WishList from "../pages/WishList";
import ContactPage from '../pages/ContactPage';
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
    element: <FilterPage></FilterPage>,
  },
  {
    path: "/contact",
    element: <ContactPage></ContactPage>
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
    path: "/account",
    element: <AccountPage></AccountPage>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/checkout",
    element: <CheckOutPage></CheckOutPage>
  },
];

const layoutRouter = (routers) => {
  return routers.map((router) => {
    router.element = <AppLayout>{router.element}</AppLayout>;
    return router;
  });
};

export default layoutRouter(routers);
