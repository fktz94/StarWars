import { Link } from 'react-router-dom';
import Paginator from './Paginator';

export default function PageContainer({
  count,
  currentPage,
  error,
  handleCurrentPage,
  isLoading,
  results,
  section
}) {
  const qtyOfPages = Math.ceil(count / 10);

  const listOfResults = results.map((item) => {
    const id = item.url
      .split('/')
      .filter((el) => el)
      .slice(-1);

    return (
      <li key={item.title || item.name}>
        <Link to={`${id}`} state={{ statePage: currentPage, section }} className="hover:underline">
          {item.title || item.name}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h2>{section}</h2>
      {count > 0 && (
        <>
          <div>
            total of {count} {section}
          </div>
          <Paginator
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            qtyOfPages={qtyOfPages}
          />
        </>
      )}
      {isLoading && <div>loading...</div>}
      {error !== 'canceled' && <div>{error}</div>}
      {!isLoading && results ? <ul>{listOfResults}</ul> : null}
    </div>
  );
}
