import { configureStore } from "@reduxjs/toolkit";
import feedSliceReducer from "../features/feedSlice";
import searchSliceReducer from "../features/searchSlice";
import subRedditSliceReducer from "../features/subRedditSlice";

const store = configureStore({
    reducer: {
      feed: feedSliceReducer,
      search: searchSliceReducer,
      subReddit: subRedditSliceReducer
    }
})

export default store;