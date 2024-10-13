import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { isClient } from "@/utils/functions";
import authReducer from "./auth/auth.slice";
import userReducer from "./user/user.slice";
import videoReducer from "./videos/videos.slice";
declare global {
  interface Window {
    isInitialHydrationComplete: boolean;
  }
}

const combinedReducers = combineReducers({
  // Add reducers here
  auth: authReducer,
  user: userReducer,
  video: videoReducer
});
//@ts-expect-error heij
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
//@ts-expect-error b jbsd
export default function rootReducer(state, action) {
  const intermediateState = combinedReducers(state, action);
  const finalState = crossSliceReducer(intermediateState, action);
  return finalState;
}
