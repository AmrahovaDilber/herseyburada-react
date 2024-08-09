import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './assets/css/index.css';
import routers from "./router/routers";

const router = createBrowserRouter(routers);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
