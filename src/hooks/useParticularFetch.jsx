import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function useParticularFetch() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const { id } = useParams();
  const location = useLocation();
  const section = location.pathname.split('/').slice(1, 2)[0];

  const URL = `https://swapi.dev/api/${section}/${id}`;

  useEffect(() => {
    // find a solution to the problem that appears because of strictmode.
    // the error caused because the fetch abort caused by the rerender of the effect appears AFTER the second render, and so the UI doesn't work as i want

    const controller = new AbortController();
    (async () => {
      try {
        setIsLoading(true);
        const fetch = await axios.get(URL, { signal: controller.signal });
        const resp = await fetch.data;
        setData(resp);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      controller.abort();
      setData({});
      setError('');
      setIsLoading(true);
    };
  }, [URL]);

  return { data, error, isLoading };
}
