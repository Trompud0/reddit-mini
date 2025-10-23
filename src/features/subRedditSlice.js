import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSubReddit = createAsyncThunk(
    'subReddits/fetchSubReddit',
    async () => {
      const response = await fetch('https://www.reddit.com/subreddits.json');
      const data = await response.json();
      const fetched = data.data.children;
      return fetched;
    }
)

export const subRedditSlice = createSlice({
    name: 'subReddits',
    initialState: {
      isLoading: false,
      error: null,
      subReddits: [],
      selectedSubReddit: ''
    },
    reducers: {
      updateSubReddit: (state, action) => {
        state.selectedSubReddit = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchSubReddit.pending, (state, action) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchSubReddit.fulfilled, (state, action) => {
            state.subReddits = action.payload;
          state.isLoading = false;
          state.error = null;
        })
        .addCase(fetchSubReddit.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
    })
    }
})

export const { updateSubReddit } = subRedditSlice.actions;
export default subRedditSlice.reducer;
export { fetchSubReddit };