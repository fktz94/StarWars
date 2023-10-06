import { useState } from 'react';

export default function usePage(statePage) {
  const [currentPage, setCurrentPage] = useState(statePage || 1);

  const handleCurrentPage = (action, page) => {
    if (action === 'change') return setCurrentPage(page);
    if (action === 'next') return setCurrentPage((prev) => prev + 1);
    if (action === 'previous') return setCurrentPage((prev) => prev - 1);
    return false;
  };

  return { currentPage, handleCurrentPage };
}
