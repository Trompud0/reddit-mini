import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSearch = createAsyncThunk(
    'search/fetchSearch',
     async (searchTerm, thunkAPI) => {
       const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`);
       const data = await response.json();
       const fetched = data.data.children;
       return fetched;
     }
)

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
      searchTerm: '',
      results: [],
      isLoading: false,
      error: null
    },
    reducers: {
      updateSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchSearch.pending, (state, action) => {
          state.isLoading = true;
          state.error = null; 
        })
        .addCase(fetchSearch.fulfilled, (state, action) => {
          state.results = action.payload;  
          state.isLoading = false;
          state.error = null;
        })
        .addCase(fetchSearch.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })
    }
})

export const { updateSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
export { fetchSearch };