import { Dispatch } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { deleteUser } from "src/actions/weatherApiActions"
import Button from "src/components/button"
import UserCard from "src/components/userCard"

interface IProps{ 
    isModalActive: boolean
    setShowModalDelUser: (value: boolean)=>void,
    deleteSelectedUser: (userId: string)=>void,
    userId: string,
    users: IUser[]

}
  
interface IUser{
    id: string,
    username: string,
    lng: string,
    lat: string,
    img: string,
  }
  
const ModalDelUser = (props : IProps) => {
    const {isModalActive, setShowModalDelUser, userId, users, deleteSelectedUser } = props
    const [userInfo, setUserInfo] = useState<IUser>()
    
    useEffect(() => {
      setUserInfo(users.find((user)=> user.id == userId))
      
    },[userId])

    if (!isModalActive || userId == ''){
        return
    }
    const handlerDeleteUser = ()=>{
        if(userId=='1' || userId=='2'){
            alert('Usuario de prueba no se puede eliminar')
            setShowModalDelUser(false)
            return
        }
        deleteSelectedUser(userId)
        setShowModalDelUser(false)
    }
  return (
    <div className="modal-del-user">
        <div className="modal-del-user-container">
            <div className="headline-desktop3">Eliminar usuario</div>
            <UserCard id={userInfo?.id || ''} lat={userInfo?.lat || ''} lng={userInfo?.lng || ''} userImg={userInfo?.img || ''}  userName={userInfo?.username || ''}  hideButtons/>
            <div className="btn-container">
                <Button onClick={handlerDeleteUser} color="Primary" size="md" type="Label" label="Eliminar"/>
                <Button onClick={()=>setShowModalDelUser(false)} color="Primary Light" size="md" type="Label" label="Cancelar"/>
            </div>
        </div>
    </div>
  )
}

interface IState {
    users: []
  }

  const actions = (dispatch : Dispatch ) => {
    return {
      deleteSelectedUser(userId: string ) {
        deleteUser(dispatch)(userId);
      },
    };
  };
  
  const properties = (state: IState) => {
    const allUsers = state.users;
    return {
      users: allUsers
    };
  };
  
export default connect(properties, actions)(ModalDelUser);
