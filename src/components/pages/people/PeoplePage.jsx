import { useEffect } from 'react';
import getPeople from '../../../store/slices/people/thunks';
import PagesContainer from '../../PageContainer';
import useData from '../../../hooks/useData';

export default function PeoplePage() {
  const SECTION = 'people';
  const { URL, count, currentPage, dispatch, handleCurrentPage, error, isLoading, results } =
    useData(SECTION);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(getPeople(`${URL}${currentPage}`, controller.signal));
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
