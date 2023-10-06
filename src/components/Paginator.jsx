function totalPages(qtyOfPages) {
  const pages = [];
  for (let i = 0; i < qtyOfPages; i += 1) {
    pages.push(i + 1);
  }
  return pages;
}

export default function Paginator({ currentPage, handleCurrentPage, qtyOfPages }) {
  if (qtyOfPages <= 1) return null;

  const pages = totalPages(qtyOfPages).map((el) => (
    <button
      type="button"
      className={`border border-black rounded px-2 py-1 ${
        el === currentPage
          ? 'bg-red-600'
          : 'bg-transparent/50 hover:bg-transparent/80 active:bg-black'
      }`}
      key={el}
      onClick={() => {
        handleCurrentPage('change', +el);
      }}>
      {el}
    </button>
  ));

  return (
    <div className="flex gap-1">
      <button
        type="button"
        className={`border rounded px-2 py-1 ${
          currentPage <= 1
            ? 'bg-gray-400 text-gray-600 border-gray-500'
            : 'border-black bg-transparent/50 hover:bg-transparent/80 active:bg-black'
        }`}
        disabled={currentPage <= 1}
        onClick={() => handleCurrentPage('previous')}>
        prev
      </button>
      {pages}
      <button
        type="button"
        className={`border rounded px-2 py-1 ${
          currentPage === qtyOfPages
            ? 'bg-gray-400 text-gray-600 border-gray-500'
            : 'border-black bg-transparent/50 hover:bg-transparent/80 active:bg-black'
        }`}
        disabled={currentPage === qtyOfPages}
        onClick={() => handleCurrentPage('next')}>
        next
      </button>
    </div>
  );
}
