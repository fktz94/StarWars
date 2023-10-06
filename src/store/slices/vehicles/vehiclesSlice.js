import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  error: '',
  isLoading: false,
  results: []
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    startLoadingVehicles: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    setVehicles: (state, action) => {
      state.count = action.payload.count;
      state.isLoading = false;
      state.results = action.payload.results;
    },
    setVehiclesError: (state, action) => {
      state.error = action.payload.error;
    }
  }
});

export const { setVehicles, setVehiclesError, startLoadingVehicles } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
