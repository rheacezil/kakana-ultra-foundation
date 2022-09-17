import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducers/registerReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    userLists: registerReducer,
    activeUser: userReducer,
  },
});
