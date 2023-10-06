import axios from 'axios';
import { setVehicles, setVehiclesError, startLoadingVehicles } from './vehiclesSlice';

export default function getVehicles(url, controller) {
  return async (dispatch) => {
    try {
      dispatch(startLoadingVehicles());
      const {
        data: { count, results }
      } = await axios.get(url, { signal: controller });
      dispatch(setVehicles({ count, results }));
    } catch (e) {
      dispatch(setVehiclesError({ error: e.message }));
    }
  };
}
