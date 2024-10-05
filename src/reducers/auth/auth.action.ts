import { AppDispatch } from "../store";
import {
  setAuthError,
  setAuthFetchSuccess,
  setAuthLoading,
  setAuthLogout,
} from "./auth.slice";
import { ILoginPayload } from "@/services/auth/auth.types";

export const authLogin =
  (payload: ILoginPayload) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setAuthLoading(true));
      const resp = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          content: "application/json",
        },
      });
      const data = await resp.json();
      dispatch(setAuthFetchSuccess(data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setAuthError(error.message));
      } else {
        dispatch(setAuthError("An unknown error occurred"));
      }
    } finally {
      dispatch(setAuthLoading(false));
    }
  };

export const authLogout = () => async (dispatch: AppDispatch) => {
  try {
    setAuthLoading(true);
    dispatch(setAuthLogout());
  } catch (err) {
    if (err instanceof Error) {
      dispatch(setAuthError(err.message));
    } else {
      dispatch(setAuthError("An unknown error occurred"));
    }
  } finally {
    dispatch(setAuthLoading(false));
  }
};
