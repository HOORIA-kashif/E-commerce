import { createSlice } from "@reduxjs/toolkit";

// LocalStorage se user state uthana
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null, // Agar user logged in hai to state maintain rahe
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
      localStorage.removeItem("user"); // LocalStorage se hatao
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
