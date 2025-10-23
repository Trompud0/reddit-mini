import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFeed = createAsyncThunk(
    'feed/fetchfeed',
     async (subreddit, thunkAPI) => {
       const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
       const data = await response.json();
       const fetched = data.data.children;
       return fetched;
     }
)

export const fetchComments = createAsyncThunk(
    'feed/fetchComments',
     async ({subreddit, postId}, thunkAPI) => {
       const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`);
       const data = await response.json();
       const fetched = data[1].data.children;
       return fetched;
     }
)

export const feedSlice = createSlice({
    name: 'feed',
    initialState: {
      posts: [],
      comments: [],
      isLoading: false,
      error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
       builder
         .addCase(fetchFeed.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
       })
         .addCase(fetchFeed.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.error = null;
       })
         .addCase(fetchFeed.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
       })
         .addCase(fetchComments.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
       })
         .addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload;
            state.isLoading = false;
            state.error = null;
       })
         .addCase(fetchComments.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
       })
    }  
}) 

export default feedSlice.reducer;
export { fetchFeed, fetchComments };