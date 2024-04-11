import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};


const authSliceUser = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setUserCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    userLogout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setUserCredentials, userLogout } = authSliceUser.actions;
export default authSliceUser.reducer;
