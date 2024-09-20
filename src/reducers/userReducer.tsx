import { Action } from "@reduxjs/toolkit";
import { INITIAL_USERS } from "src/actions/weatherApiActions";

const initialState: IUser[] = 
    [
      {
        id: '1',
        username: 'Test boy',
        lat: '20.6637808',
        lng: '-103.4315425',
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
        lat: '20.6637808',
        lng: '-103.4315425',
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
    id: String,
    username: String,
    lng: String,
    lat: String,
    locationWeather: {
      humidity: String,
      wind_kph: String,
      wind_degree: String,
      uv: String,
      vis_km: String
    }
  }

  export const UserReducer = (state = initialState, action : Action) => {
    switch (action.type) {
      case INITIAL_USERS:
        const newState = state
        return newState;
      // case "@SET/USER":
      //   return {
      //     data: state?.data?.results?.map((obj) => ({
      //       ...obj,
      //       isFavorite: false
      //     }))
      //   };
      // case "@UPDATE/USER":
      //   return {
      //     data: state?.data?.map((heroe, i) =>
      //       i === action.payload ? { ...heroe, isFavorite: true } : heroe
      //     )
      //   };
      default:
        return state;
    }
  };
  