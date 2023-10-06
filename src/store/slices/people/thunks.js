import axios from 'axios';
import { setPeople, setPeopleError, startLoadingPeople } from './peopleSlice';

export default function getPeople(url, controller) {
  return async (dispatch) => {
    try {
      dispatch(startLoadingPeople());
      const {
        data: { count, results }
      } = await axios.get(url, { signal: controller });
      dispatch(setPeople({ count, results }));
    } catch (e) {
      dispatch(setPeopleError({ error: e.message }));
    }
  };
}
