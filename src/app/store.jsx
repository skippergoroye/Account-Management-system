import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "../features/users/userSlice";
import userAuthReducer from "../features/auth/authSliceUser";
import adminAuthReducer from "../features/auth/authSliceAdmin";
import { apiSlice } from "../features/api/apiSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    authUser: userAuthReducer,
    authAdmin: adminAuthReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
