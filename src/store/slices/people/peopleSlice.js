import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  error: '',
  isLoading: false,
  results: []
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    startLoadingPeople: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    setPeople: (state, action) => {
      state.count = action.payload.count;
      state.isLoading = false;
      state.results = action.payload.results;
    },
    setPeopleError: (state, action) => {
      state.error = action.payload.error;
    }
  }
});

export const { setPeople, setPeopleError, startLoadingPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
