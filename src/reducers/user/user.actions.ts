import { toast } from "@/hooks/use-toast";
import { AppDispatch } from "../store";
import { setLoading, setLogout, setUser, setUserAuthError } from "./user.slice";

export const setUserDetails = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const resp = await fetch("/api/auth/login", {
      method: "GET",
      headers: {
        content: "application/json",
      },
      credentials: "include",
    });
    const data = await resp.json();
    if (data.statusCode === 201) {
      dispatch(setUser(data.data.user));
    } else {
      dispatch(setUserAuthError(data.message));
    }
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setUserAuthError(error.message));
      toast({
        title: "Error Occurred",
        description: error.message,
      });
    } else {
      dispatch(setUserAuthError("An unknown error occurred"));
    }
  }
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    await fetch("/api/auth/logout", {
      method: "GET",
      credentials: "include",
    });
    dispatch(setLogout());
    window.location.href = "/auth/login";
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setUserAuthError(error.message));
      toast({
        title: "Error Occurred",
        description: error.message,
        variant: "destructive",
      });
    } else {
      dispatch(setUserAuthError("An unknown error occurred"));
    }
  }
};
