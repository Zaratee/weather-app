import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'src/components/button'
import SelectIcon from 'src/components/selectIcon'
import { DelUserContext } from 'src/layout/home/home'

interface IProps{
  id: string,
  lat: string,
  lng: string,
  userName: string, 
  userImg: string,
  hideButtons?: boolean
}

export const UserCard = (props:IProps) => {
  const { lat, lng, userName, userImg, id, hideButtons} = props
  const navigate = useNavigate();
  const deleteUserModal = useContext(DelUserContext)
  const handlerDetails = ()=>{
    navigate('/details', { state: { id: id } });
  }

  const handlerDelete = ()=>{
    deleteUserModal.setShowModal(true)
    deleteUserModal.setUserId(id)
  }
  
  return (
    <div className={`user-card ${hideButtons && 'user-card-compact'}`}>
      <img src={userImg}/>
      <div className='user-card-body'>
        <div className='headline-desktop3'>{userName}</div>
        <div className='user-card-info'>
          <SelectIcon color='Primary' size='md' type='Pin' />
          {lat},  {lng}
        </div>
        {
          !hideButtons &&
          <div className='user-card-btns'>
            <Button onClick={handlerDetails} color='Primary Light' type='Label' size='md' label={'Detalles'} border/> 
            <Button onClick={handlerDelete} color='Primary Light' type='Icon Rounded' size='md' iconType='Delete' iconColor='Primary'/>
          </div>
        }
      </div>
    </div>
  )
}

