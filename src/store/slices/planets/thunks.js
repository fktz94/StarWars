import axios from 'axios';
import { setPlanets, setPlanetsError, startLoadingPlanets } from './planetsSlice';

export default function getPlanets(url, controller) {
  return async (dispatch) => {
    try {
      dispatch(startLoadingPlanets());
      const {
        data: { count, results }
      } = await axios.get(url, { signal: controller });
      dispatch(setPlanets({ count, results }));
    } catch (e) {
      dispatch(setPlanetsError({ error: e.message }));
    }
  };
}
