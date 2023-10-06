import axios from 'axios';
import { setSpecies, setSpeciesError, startLoadingSpecies } from './speciesSlice';

export default function getSpecies(url, controller) {
  return async (dispatch) => {
    try {
      dispatch(startLoadingSpecies());
      const {
        data: { count, results }
      } = await axios.get(url, { signal: controller });
      dispatch(setSpecies({ count, results }));
    } catch (e) {
      dispatch(setSpeciesError({ error: e.message }));
    }
  };
}
