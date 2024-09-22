import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import WeatherDetails from './components/weatherDetails';
import StateDetails from './components/stateDetails';
import UserCard from 'src/components/userCard';
import GoogleMap from 'src/components/googleMap';


interface IProps{
    users: IUser
}

interface IUser{
  id: string,
  username: string,
  lng: string,
  lat: string,
  img: string,
  locationWeather: {
    humidity: number,
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    uv: string,
    vis_km: number,
    name: string,
    date: string,
    temp_c: number,
    condition: string
  }
}

const UserDetails = (props: IProps) => {
    const {users} = props
  return (
    <div className='user-details'> 
    <div className='user-details-body'>
      <div className='headline-desktop1'>Pronóstico del tiempo</div>
      <div>Lorem ipsum dolor sit amet consectetur. Maecenas mauris massa magnis magna adipiscing proin. Vulputate facilisi ornare blandit eu eleifend at.</div>
      <div className='user-details-data-container'>
        <section>
          <WeatherDetails locationWeather={users.locationWeather}/>
        </section>
        <section className='doble-spot'>
          <StateDetails date={users.locationWeather.date} temperature={users.locationWeather.temp_c} type='SUN'/>
          <UserCard id={users.id} lat={users.lat} lng={users.lng} userImg={users.img} userName={users.username} hideButtons />
        </section>
        <section className='doble-spot-end'>
          <StateDetails date={users.locationWeather.date} temperature={users.locationWeather.temp_c} type='SUN'/>
          <div className='google-map-container'>
            <GoogleMap lat={parseInt(users.lat)} lng={parseInt(users.lng)}/>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

interface IState {
    users: []
  }
  
const properties = (state: IState) => {
  const location = useLocation();
  const id = location.state.id;
  const selectedUserIndex = state.users.findIndex((user:IUser)=>user.id == id);  
  return {
    users: state.users[selectedUserIndex]
  };
};

export default connect(properties)(UserDetails);