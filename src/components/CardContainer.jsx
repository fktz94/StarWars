import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function CardContainer({ children, isLoading, error }) {
  const location = useLocation();

  if (error) return <span>there has been an error: `{error}`</span>;
  if (isLoading) return <span>loading data...</span>;

  const statePage = location.state?.statePage;

  return (
    <div className="flex flex-col">
      <Link to="./.." state={{ statePage }} className="hover:underline">
        go back
      </Link>
      {children}
    </div>
  );
}
