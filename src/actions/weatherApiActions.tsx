import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { allAvatars } from "src/data/userProfiles";

interface IInfoUserFromForm{
    username: string,
    lat: string,
    lng: string,
    profile: string
}

export interface IAPIInfo {
    location: ILocation;
    current:  ICurrent;
}

export interface ICurrent {
    last_updated_epoch: number;
    last_updated:       string;
    temp_c:             number;
    temp_f:             number;
    is_day:             number;
    condition:          ICondition;
    wind_mph:           number;
    wind_kph:           number;
    wind_degree:        number;
    wind_dir:           string;
    pressure_mb:        number;
    pressure_in:        number;
    precip_mm:          number;
    precip_in:          number;
    humidity:           number;
    cloud:              number;
    feelslike_c:        number;
    feelslike_f:        number;
    windchill_c:        number;
    windchill_f:        number;
    heatindex_c:        number;
    heatindex_f:        number;
    dewpoint_c:         number;
    dewpoint_f:         number;
    vis_km:             number;
    vis_miles:          number;
    uv:                 number;
    gust_mph:           number;
    gust_kph:           number;
}

export interface ICondition {
    text: string;
    icon: string;
    code: number;
}

export interface ILocation {
    name:            string;
    region:          string;
    country:         string;
    lat:             number;
    lon:             number;
    tz_id:           string;
    localtime_epoch: number;
    localtime:       string;
}

interface INewUser{
    id: string,
    username: string,
    lng: string,
    lat: string,
    img: string,
    locationWeather: {
      humidity: number,
      wind_kph: number,
      wind_degree: number,
      uv: number,
      vis_km: number
    }
  }

export const INITIAL_USERS = "@GET/INITIALUSERS";
export const CREATE_USER = "@POST/NEWUSER";
// export const WEATHERAPI_UPDATE_ALTOMOBILE_API = "@WEATHERAPI/UPDATE_ALTOMOBILE_API";
// export const WEATHERAPI_CREATE_CUSTOM = "@WEATHERAPI/CREATE_CUSTOM";
// export const WEATHERAPI_FETCHING = "@WEATHERAPI/FETCHING";
// export const WEATHERAPI_GET_SESSION_STORAGE = "@WEATHERAPI/WEATHERAPI_GET_SESSION_STORAGE";

// const fetching = (fetching = true) => {
//   return { type: WEATHERAPI_FETCHING, fetching };
// }
// const fetchingError = (error = "Unkown Error") => {
//   return { type: WEATHERAPI_ERROR, error };
// }
const createNewUser = (user :INewUser) => {
  return { type: CREATE_USER, user };
}
// const createCustomAppointments = (appointment = {}) => {
//   return { type: WEATHERAPI_CREATE_CUSTOM, appointment };
// }
// const getSessionStorageApointments = () => {
//   return { type: WEATHERAPI_GET_SESSION_STORAGE };
// }



export const getWeatherFromNewUser =  (dispatch:Dispatch) => (value: IInfoUserFromForm) => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=8906e599e51042e4855194612241909&q=${value.lat},${value.lng}&aqi=no`)
    .then(function (response) {
        const data: IAPIInfo = response.data
        const id = ''+Date.now()
        const imgSrcIndex = allAvatars.findIndex((avatar)=> avatar.name == value.profile)
        const infoNewUser: INewUser = {
            id: id,
            username: value.username,
            lng: value.lng,
            lat: value.lat,
            img: allAvatars[imgSrcIndex].img,
            locationWeather: {
                humidity: data.current.humidity,
                wind_kph: data.current.wind_kph,
                wind_degree: data.current.wind_degree,
                uv: data.current.uv,
                vis_km: data.current.vis_km
            }
        }
        dispatch(createNewUser(infoNewUser));
    })
    .catch(function () {
        alert('Error Usuario no creado. Ubicación no encontrada')
        return
    })
    .finally(function () {
        // always executed
    });

    // fetch('https://altomobile.blob.core.windows.net/api/test.json')
    // .then((response) => response.json())
    // .then((data) => {
    //     dispatch(updateAppointmentsApi(data));
    // })
    // .catch((err) => {
    //   dispatch(fetchingError(err.message));
    // });
}

// export const saveCustomAppointment = (customAppointment) => (dispatch) => {
//   const {appointment, name} = customAppointment
//   dispatch(createCustomAppointments({newCustomAppointment:appointment, name: name}))
// }

// export const getAllSessionStorageApointments = () => (dispatch) =>  {
//   dispatch(getSessionStorageApointments())
// }