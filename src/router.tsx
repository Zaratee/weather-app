import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layout/home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>
    },
  ]);
  