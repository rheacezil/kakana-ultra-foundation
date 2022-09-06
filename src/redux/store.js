import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";

export const store = configureStore({
  reducer: {
    userList: registerReducer,
    activeUser: loginReducer,
  },
});
