import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import ModalAddUser from "src/page/modalAddUser"
import { useState } from "react"

export const HomeLayout = () => {
  const [showModalAddUser, setShowModalAddUser] = useState<Boolean>(false)

  const handlerShowModalAddUser = (value : Boolean) => {
    setShowModalAddUser(value)
  }

  return (
    <div className={`home-layout ${showModalAddUser && 'overflow-hidden'}`}>
        <Navbar setShowModalAddUser={handlerShowModalAddUser}/>
        <div className="home-layout-body">
          <Outlet/>
        </div>
        <ModalAddUser isModalActive={showModalAddUser} setShowModalAddUser={handlerShowModalAddUser}/>
    </div>
  )
}

