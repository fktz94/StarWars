import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  error: '',
  isLoading: false,
  results: []
};

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    startLoadingStarships: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    setStarships: (state, action) => {
      state.count = action.payload.count;
      state.isLoading = false;
      state.results = action.payload.results;
    },
    setStarshipsError: (state, action) => {
      state.error = action.payload.error;
    }
  }
});

export const { setStarships, setStarshipsError, startLoadingStarships } = starshipsSlice.actions;

export default starshipsSlice.reducer;
