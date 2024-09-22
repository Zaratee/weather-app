import { CREATE_USER, INITIAL_USERS } from "src/actions/weatherApiActions";
import { allAvatars } from "src/data/userProfiles";

const initialState: IUser[] = 
    [
      {
        id: '1',
        username: 'Test boy',
        lat: '25.6137808',
        lng: '-93.4305425',
        img: allAvatars[0].img,
        locationWeather : {
          humidity: '70',
          uv: '1',
          vis_km: '10',
          wind_degree: '59',
          wind_kph: '13'
        }
      },
      {
        id: '2',
        username: 'Test girl',
        lat: '30.6637808',
        lng: '-203.4315425',
        img: allAvatars[1].img,
        locationWeather : {
          humidity: '70',
          uv: '1',
          vis_km: '10',
          wind_degree: '59',
          wind_kph: '13'
        }
      }
    ]
  
  interface IUser{
    id: string,
    username: string,
    lng: string,
    lat: string,
    img: string,
    locationWeather: {
      humidity: string,
      wind_kph: string,
      wind_degree: string,
      uv: string,
      vis_km: string
    }
  }

  export const UserReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case INITIAL_USERS:
        const newState = state
        return newState;
      case CREATE_USER:
        const updateState= [];
        state.forEach((user)=>updateState.push(user))
        updateState.push(action.user)
        return updateState
      default:
        return state;
    }
  };
  