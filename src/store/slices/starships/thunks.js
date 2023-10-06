import axios from 'axios';
import { setStarships, setStarshipsError, startLoadingStarships } from './starshipsSlice';

export default function getStarships(url, controller) {
  return async (dispatch) => {
    try {
      dispatch(startLoadingStarships());
      const {
        data: { count, results }
      } = await axios.get(url, { signal: controller });
      dispatch(setStarships({ count, results }));
    } catch (e) {
      dispatch(setStarshipsError({ error: e.message }));
    }
  };
}
