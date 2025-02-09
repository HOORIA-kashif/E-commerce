import { createSlice } from "@reduxjs/toolkit";


const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // LocalStorage update
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user"); 
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
