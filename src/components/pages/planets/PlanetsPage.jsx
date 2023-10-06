import { useEffect } from 'react';
import getPlanets from '../../../store/slices/planets/thunks';
import PagesContainer from '../../PageContainer';
import useData from '../../../hooks/useData';

export default function PlanetsPage() {
  const SECTION = 'planets';
  const { URL, count, currentPage, dispatch, handleCurrentPage, error, isLoading, results } =
    useData(SECTION);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(getPlanets(`${URL}${currentPage}`, controller.signal));
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
