import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "@/services/user/user.types";

interface IinitialState {
  user: IUser | null;
  isLoading: boolean;
  error: string;
}

const intialState: IinitialState = {
  user: null,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: intialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserAuthError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLogout: () => {
      return intialState;
    },
  },
});

export const { setUser, setLoading, setLogout, setUserAuthError } =
  userSlice.actions;

export default userSlice.reducer;
