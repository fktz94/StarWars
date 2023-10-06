import axios from 'axios';
import { setFilms, setFilmsError, startLoadingFilms } from './filmsSlice';

export default function getFilms(url, controller) {
  return async (dispatch) => {
    try {
      dispatch(startLoadingFilms());
      const {
        data: { count, results }
      } = await axios.get(url, { signal: controller });
      dispatch(setFilms({ count, results }));
    } catch (e) {
      dispatch(setFilmsError({ error: e.message }));
    }
  };
}
