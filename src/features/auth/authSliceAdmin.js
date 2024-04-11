import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminInfo: localStorage.getItem("adminInfo")
    ? JSON.parse(localStorage.getItem("adminInfo"))
    : null,
};

const authSliceAdmin = createSlice({
  name: "authAdmin",
  initialState,
  reducers: {
    setAdminCredentials: (state, action) => {
      state.adminInfo = action.payload;
      localStorage.setItem("adminInfo", JSON.stringify(action.payload));
    },
    adminLogout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});



export const { setAdminCredentials, adminLogout } = authSliceAdmin.actions
export default authSliceAdmin.reducer
