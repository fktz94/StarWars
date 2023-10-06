import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  error: '',
  isLoading: false,
  results: []
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    startLoadingPlanets: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    setPlanets: (state, action) => {
      state.count = action.payload.count;
      state.isLoading = false;
      state.results = action.payload.results;
    },
    setPlanetsError: (state, action) => {
      state.error = action.payload.error;
    }
  }
});

export const { setPlanets, setPlanetsError, startLoadingPlanets } = planetsSlice.actions;

export default planetsSlice.reducer;
