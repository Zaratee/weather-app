import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "./layout/home";
import Home from "./page/home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path:'home',
          element: <Home/>
        },
        {
          path:'*',
          element: <Navigate to={'/home'} />
        },
        
      ]
    },
    {
      path: '*',
      element: <Navigate to={'/home'} />,
    },
  ]);
  