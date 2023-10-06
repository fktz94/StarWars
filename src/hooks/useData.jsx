import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import usePage from './usePage';

export default function useData(section) {
  const location = useLocation();

  const { currentPage, handleCurrentPage } = usePage(location.state?.statePage);
  const { count, error, isLoading, results } = useSelector((state) => state[section]);
  const dispatch = useDispatch();

  const URL = `https://swapi.dev/api/${section}/?page=`;

  return { count, currentPage, dispatch, handleCurrentPage, error, isLoading, results, URL };
}
