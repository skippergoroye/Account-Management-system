import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from '../features/auth/authSliceUser';
import { apiSlice } from "../features/api/apiSlice";





export default configureStore({
  reducer: {
    authUser: userAuthReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})