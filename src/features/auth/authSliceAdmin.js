import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminInfo: localStorage.getItem("adminInfo")
    ? JSON.parse(localStorage.getItem("adminInfo"))
    : null,
  token: localStorage.getItem("admintoken")
    ? JSON.parse(localStorage.getItem("admintoken"))
    : null,
  transaction: {},
};

const authSliceAdmin = createSlice({
  name: "authAdmin",
  initialState,
  reducers: {
    setAdminCredentials: (state, action) => {
      state.adminInfo = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("admintoken", JSON.stringify(action.payload.token));
      localStorage.setItem("adminInfo", JSON.stringify(action.payload.user));
    },
    adminLogout: (state) => {
      state.adminInfo = null;
      state.token = null;
      localStorage.removeItem("adminInfo");
      localStorage.removeItem("admintoken");
    },
    setTransaction: (state, action) => {
      state.transaction = action.payload;
    },
  },
});

export const { setAdminCredentials, adminLogout, setTransaction } =
  authSliceAdmin.actions;
export default authSliceAdmin.reducer;
