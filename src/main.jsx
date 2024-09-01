import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import routes from "./router/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createHashRouter(routes);
createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
    <ToastContainer />
  </div>
);
