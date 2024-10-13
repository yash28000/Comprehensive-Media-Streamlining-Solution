import { IMetaVideoStore } from "@/services/videos/videos.types";
import { AppDispatch } from "../store";
import { setSelectedVideo } from "./videos.slice";

export const SelectedVideoUpload =
  (payload: any) => (dispatch: AppDispatch) => {
    try {
      dispatch(setSelectedVideo([payload]));
    } catch {
      console.log("error");
    }
  };

export const removeSelectedVideo = () => (dispatch: AppDispatch) => {
  try {
    dispatch(setSelectedVideo(null));
  } catch {
    console.log("error");
  }
};
