import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { isClient } from "@/utils/functions";
import authReducer from "./auth/auth.slice";

declare global {
  interface Window {
    isInitialHydrationComplete: boolean;
  }
}

const combinedReducers = combineReducers({
  // Add reducers here
  auth: authReducer,
});
//@ts-ignore
export const crossSliceReducer = (state, { type, payload }) => {
  switch (type) {
    case HYDRATE: {
      if (isClient()) {
        const updateWindow = window;
        if (!updateWindow.isInitialHydrationComplete) {
          updateWindow.isInitialHydrationComplete = true;
          return {
            ...state,
            ...payload,
          };
        }
        return { ...state, auth: payload.auth };
      }
    }
    default: {
      return state;
    }
  }
};

export type RootState = ReturnType<typeof combinedReducers>;
//@ts-ignore
export default function rootReducer(state, action) {
  //@ts-ignore
  const intermediateState = combinedReducers(state, action);
  const finalState = crossSliceReducer(intermediateState, action);
  return finalState;
}
