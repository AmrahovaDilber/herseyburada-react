import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './assets/css/index.css';
import routes from "./router/routes";

const router = createHashRouter(routes);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
