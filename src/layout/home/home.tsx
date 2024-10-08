import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import ModalAddUser from "src/page/modalAddUser"
import { createContext, useState } from "react"
import ModalDelUser from "src/page/modalDelUser"

export const DelUserContext = createContext({setShowModal: (_data:boolean)=>{}, setUserId: (_id:string)=>{}})

export const HomeLayout = () => {
  const [showModalAddUser, setShowModalAddUser] = useState<boolean>(false)
  const [showModalDelUser, setShowModalDelUser] = useState<boolean>(false)
  const [userDelID, setUserDelID] = useState<string>('')

  const handlerShowModalDelUser = (value : boolean) => {
    setShowModalDelUser(value)
  }

  const handlerShowModalAddUser = (value : boolean) => {
    setShowModalAddUser(value)
  }

  return (
    <div className={`home-layout ${showModalAddUser || showModalDelUser && 'overflow-hidden'}`}>
        <Navbar setShowModalAddUser={handlerShowModalAddUser}/>
        <div className="home-layout-body">
          <DelUserContext.Provider value={{setShowModal: setShowModalDelUser, setUserId:setUserDelID}}>
              <Outlet/>
          </DelUserContext.Provider>
        </div>
        <ModalDelUser userId={userDelID} isModalActive={showModalDelUser} setShowModalDelUser={handlerShowModalDelUser} />
        <ModalAddUser isModalActive={showModalAddUser} setShowModalAddUser={handlerShowModalAddUser}/>
    </div>
  )
}

