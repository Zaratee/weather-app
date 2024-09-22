import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "./layout/home";
import Home from "./page/home";
import UserDetails from "./page/userDetails";
import { DetailsLayout } from "./layout/details/details";

export const router = createBrowserRouter([
    {
      path: "/home",
      element: <HomeLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '*',
          element: <Navigate to={'/home'} />,
        }
      ]
    },
    {
      path: '/details',
      element:<DetailsLayout/>,
      children: [
        {
          index: true,
          element: <UserDetails/>
        },
        {
          path: '*',
          element: <Navigate to={'/home'} />,
        }
      ]

    },
    {
      path: '*',
      element: <Navigate to={'/home'} />,
    },
  ]);
  