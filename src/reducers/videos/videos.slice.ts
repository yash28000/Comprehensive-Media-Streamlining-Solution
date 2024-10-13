import { createSlice } from "@reduxjs/toolkit";

interface IVideo {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

interface IVideoStore {
  selectedVideo: IVideo[] | null;
}

const initialState: IVideoStore = {
  selectedVideo: null,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setSelectedVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
    removeSelectedVideo: (state) => {
      state.selectedVideo = null;
    },
  },
});

export const { setSelectedVideo, removeSelectedVideo } = videosSlice.actions;
export default videosSlice.reducer;
