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
      wind_dir: string,
      uv: number,
      vis_km: number,
      name: string,
      date: string,
      temp_c: number,
      condition: string
    }
  }

export const INITIAL_USERS = "@GET/INITIALUSERS";
export const CREATE_USER = "@POST/NEWUSER";
export const GET_USER_INFO = "@GET/USERINFO";
export const DEL_USER = "@DEL/USER";

const createNewUser = (user :INewUser) => {
  return { type: CREATE_USER, user };
}
export const deleteUser = (dispatch:Dispatch) => (userID: string) => { 
    dispatch({type: DEL_USER, userID});
}

export const getWeatherFromNewUser =  (dispatch:Dispatch) => (value: IInfoUserFromForm) => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=8906e599e51042e4855194612241909&q=${value.lat},${value.lng}&aqi=no`)
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
                wind_dir: data.current.wind_dir,
                uv: data.current.uv,
                vis_km: data.current.vis_km,
                name: data.location.name+', '+data.location.region,
                date: data.location.localtime.slice(0, data.location.localtime.indexOf(' ')),
                temp_c: data.current.temp_c,
                condition: data.current.condition.text
            }
        }
        dispatch(createNewUser(infoNewUser));
    })
    .catch(function () {
        alert('Error Usuario no creado. Ubicación no encontrada')
        return
    });
}
