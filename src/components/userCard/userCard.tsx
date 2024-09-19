import Button from 'src/components/button'
import SelectIcon from 'src/components/selectIcon'

interface IProps{
  id: String,
  lat: String,
  lng: String
}

export const UserCard = (props:IProps) => {
  const {id, lat='20.6637808', lng='-103.4315425'} = props
  return (
    <div className="user-card">
      <img src={`src/assets/img/user${id}.png`}/>
      <div className='user-card-body'>
        <div className='headline-desktop3'>User name</div>
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

