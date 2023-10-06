import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  error: '',
  isLoading: false,
  results: []
};

const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {
    startLoadingSpecies: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    setSpecies: (state, action) => {
      state.count = action.payload.count;
      state.isLoading = false;
      state.results = action.payload.results;
    },
    setSpeciesError: (state, action) => {
      state.error = action.payload.error;
    }
  }
});

export const { setSpecies, setSpeciesError, startLoadingSpecies } = speciesSlice.actions;

export default speciesSlice.reducer;
