import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"

export const HomeLayout = ({}) => {
  return (
    <div className="home-layout">
        <Navbar/>
        <div className="home-layout-body">
          <Outlet/>
        </div>
    </div>
  )
}

