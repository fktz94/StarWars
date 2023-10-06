import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function useParticularFetch(propURL) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams();
  const location = useLocation();
  const section = location.pathname.split('/').slice(1, 2)[0];

  const URL = `https://swapi.dev/api/${section}/${id}`;
  const fetchURL = propURL || URL;

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setIsLoading(true);
        const fetch = await axios.get(fetchURL, { signal: controller.signal });
        const resp = fetch.data;
        setData(resp);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      setData({});
      setError('');
      controller.abort();
    };
  }, [fetchURL]);

  return { data, error, isLoading };
}
