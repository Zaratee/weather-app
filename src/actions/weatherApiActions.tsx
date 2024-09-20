
export const INITIAL_USERS = "@GET/INITIALUSERS";
// export const WEATHERAPI_ERROR = "@GET/INITIALUSERS";
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
// const updateAppointmentsApi = (appointments = []) => {
//   return { type: WEATHERAPI_UPDATE_ALTOMOBILE_API, appointments };
// }
// const createCustomAppointments = (appointment = {}) => {
//   return { type: WEATHERAPI_CREATE_CUSTOM, appointment };
// }
// const getSessionStorageApointments = () => {
//   return { type: WEATHERAPI_GET_SESSION_STORAGE };
// }


// export const getAppointmentsAltoMobile =  () => (dispatch) => {
//     dispatch(fetching());
//     fetch('https://altomobile.blob.core.windows.net/api/test.json')
//     .then((response) => response.json())
//     .then((data) => {
//         dispatch(updateAppointmentsApi(data));
//     })
//     .catch((err) => {
//       dispatch(fetchingError(err.message));
//     });
// }

// export const saveCustomAppointment = (customAppointment) => (dispatch) => {
//   const {appointment, name} = customAppointment
//   dispatch(createCustomAppointments({newCustomAppointment:appointment, name: name}))
// }

// export const getAllSessionStorageApointments = () => (dispatch) =>  {
//   dispatch(getSessionStorageApointments())
// }