import Button from 'src/components/button'
import SelectIcon from 'src/components/selectIcon'

interface IProps{
  id: String,
  lat: String,
  lng: String,
  userName: String
}

export const UserCard = (props:IProps) => {
  const { lat, lng, userName, id} = props
  return (
    <div className="user-card">
      <img src={`src/assets/img/user${id}.png`}/>
      {/* <img src={userImg}/> */}
      <div className='user-card-body'>
        <div className='headline-desktop3'>{userName}</div>
        <div className='user-card-info'>
          <SelectIcon color='Primary' size='md' type='Pin' />
          {lat},  {lng}
        </div>
        <div className='user-card-btns'>
          <Button color='Primary Light' type='Label' size='md' label={'Detalles'} border/> 
          <Button color='Primary Light' type='Icon Rounded' size='md' iconType='Delete' iconColor='Primary'/>
        </div>
      </div>
    </div>
  )
}

