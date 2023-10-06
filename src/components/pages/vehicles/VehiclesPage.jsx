import { useEffect } from 'react';
import getVehicles from '../../../store/slices/vehicles/thunks';
import PagesContainer from '../../PageContainer';
import useData from '../../../hooks/useData';

export default function VehiclesPage() {
  const SECTION = 'vehicles';
  const { URL, count, currentPage, dispatch, handleCurrentPage, error, isLoading, results } =
    useData(SECTION);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(getVehicles(`${URL}${currentPage}`, controller.signal));
    return () => controller.abort();
  }, [dispatch, URL, currentPage]);

  return (
    <PagesContainer
      count={count}
      currentPage={currentPage}
      error={error}
      handleCurrentPage={handleCurrentPage}
      isLoading={isLoading}
      results={results}
      section={SECTION}
    />
  );
}
