import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function CardContainer({ children, isLoading, error }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (error && error !== 'canceled') return <span>there has been an error: `{error}`</span>;
  if (isLoading) return <span>loading data...</span>;

  const statePage = location.state?.statePage;

  return (
    <div className="flex flex-col">
      {statePage ? (
        <Link to="./.." state={{ statePage }} className="hover:underline">
          go back
        </Link>
      ) : (
        <button type="button" onClick={() => navigate(-1)} className="text-left hover:underline">
          go back
        </button>
      )}
      {children}
    </div>
  );
}
