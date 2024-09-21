import { Action } from "@reduxjs/toolkit";
import { INITIAL_USERS } from "src/actions/weatherApiActions";
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
        lat: '20.6637808',
        lng: '-103.4315425',
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
  