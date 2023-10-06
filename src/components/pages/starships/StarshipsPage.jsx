import { useEffect } from 'react';
import getStarships from '../../../store/slices/starships/thunks';
import PagesContainer from '../../PageContainer';
import useData from '../../../hooks/useData';

export default function StarshipsPage() {
  const SECTION = 'starships';
  const { URL, count, currentPage, dispatch, handleCurrentPage, error, isLoading, results } =
    useData(SECTION);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(getStarships(`${URL}${currentPage}`, controller.signal));
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
