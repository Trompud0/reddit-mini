import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchFeed = createAsyncThunk(
    'feed/fetchfeed',
     async (subreddit, thunkAPI) => {
       const response = await fetch(`/api/reddit/${subreddit}`);
       const data = await response.json();
       console.log(data);
       if (!data.data || !data.data.children) {
         return [];
       }
       const fetched = data.data.children;
       return fetched;
     }
)

const fetchComments = createAsyncThunk(
    'feed/fetchComments',
     async ({subreddit, postId}, thunkAPI) => {
       const response = await fetch(`/api/reddit/comments/${subreddit}/${postId}
        `);
       const data = await response.json();
       console.log(data);
       const fetched = data[1]?.data?.children || [];
       console.log('children:', data[1]?.data?.children);
       return { postId, comments: fetched};
     }
)

export const feedSlice = createSlice({
    name: 'feed',
    initialState: {
      posts: [],
      comments: {},
      isLoading: false,
      error: null,
      commentsLoading: {},
      commentsError: {}
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
            const postId = action.meta.arg.postId;
            state.commentsLoading[postId] = true;
            state.commentsError[postId] = null;
       })
         .addCase(fetchComments.fulfilled, (state, action) => {
            const { postId, comments } = action.payload;
            state.comments[postId] = comments;
            state.commentsLoading[postId] = false;
            state.commentsError[postId] = null;
       })
         .addCase(fetchComments.rejected, (state, action) => {
            const postId = action.meta.arg.postId;
            state.commentsLoading[postId] = false;
            state.commentsError[postId] = action.error.message;
       })

    }  
}) 

export default feedSlice.reducer;
export { fetchFeed, fetchComments };