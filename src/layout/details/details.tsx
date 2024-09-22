import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import ModalAddUser from "src/page/modalAddUser"
import { useState } from "react"

export const DetailsLayout = () => {
  const [showModalAddUser, setShowModalAddUser] = useState<boolean>(false)

  const handlerShowModalAddUser = (value : boolean) => {
    setShowModalAddUser(value)
  }

  return (
    <div className={`details-layout ${showModalAddUser && 'overflow-hidden'}`}>
        <Navbar setShowModalAddUser={handlerShowModalAddUser}/>
        <div className="details-layout-body">
          <Outlet/>
        </div>
        <ModalAddUser isModalActive={showModalAddUser} setShowModalAddUser={handlerShowModalAddUser}/>
    </div>
  )
}

