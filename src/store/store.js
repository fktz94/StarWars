import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './slices/people/peopleSlice';
import filmsReducer from './slices/films/filmsSlice';
import planetsReducer from './slices/planets/planetsSlice';
import speciesReducer from './slices/species/speciesSlice';
import starshipsReducer from './slices/starships/starshipsSlice';
// import vehiclesReducer from './slices/vehicles/vehiclesSlice';

const store = configureStore({
  reducer: {
    people: peopleReducer,
    films: filmsReducer,
    planets: planetsReducer,
    species: speciesReducer,
    starships: starshipsReducer
    // vehicles: vehiclesReducer
  }
});

export default store;
