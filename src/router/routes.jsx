import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
const routers = [
  {
    path: "/",
    element: <Home></Home>,
  },
];

const layoutRouter = (routers) => {
  return routers.map((router) => {
      router.element = <AppLayout>{router.element}</AppLayout>;
    return router;
  });
};

export default layoutRouter(routers)
