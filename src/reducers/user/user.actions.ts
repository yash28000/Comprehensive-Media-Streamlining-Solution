import { toast } from "@/hooks/use-toast";
import { AppDispatch } from "../store";
import { setLoading, setLogout, setUser, setUserAuthError } from "./user.slice";
import { IUser } from "@/services/user/user.types";

export const setUserDetails =
  (payload: IUser) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setUser(payload));
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
    // window.location.href = "/auth/login";
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
