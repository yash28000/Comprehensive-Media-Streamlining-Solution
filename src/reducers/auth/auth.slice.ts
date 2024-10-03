import { createSlice } from "@reduxjs/toolkit";
import { ref } from "yup";

const UserPayload = {
  user:{},
  accessToken: "",
  refreshToken: "",
};

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  loginDetails: UserPayload,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAuthFetchSuccess: (state, action) => {
      state.loginDetails = action.payload.data;
      state.isLoggedIn = true;
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
    },
    setAuthLogout: (state) => {
      return (state = initialState);
    },
  },
});

export const {
  setAuthLoading,
  setAuthFetchSuccess,
  setAuthError,
  setAuthLogout,
} = authSlice.actions;

export default authSlice.reducer;
