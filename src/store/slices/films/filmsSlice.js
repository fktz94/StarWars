import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  error: '',
  isLoading: false,
  results: []
};

const filmsSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    startLoadingFilms: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    setFilms: (state, action) => {
      state.count = action.payload.count;
      state.isLoading = false;
      state.results = action.payload.results;
    },
    setFilmsError: (state, action) => {
      state.error = action.payload.error;
    }
  }
});

export const { setFilms, setFilmsError, startLoadingFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
