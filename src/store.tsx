import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./reducers/userReducer";

export default configureStore({
  reducer: {
    users: UserReducer
  }
});