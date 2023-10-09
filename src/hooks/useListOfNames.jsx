import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useListOfNames(objectWithData) {
  const [listOfNames, setListOfNames] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    (() => {
      Object.entries(objectWithData).map(async ([name, links]) => {
        if (typeof links === 'string') {
          try {
            const fetch = await (await axios.get(links, { signal: controller.signal })).data;
            setListOfNames((prev) => {
              return { ...prev, [name]: { name: fetch.name, url: fetch.url, isLoaded: true } };
            });
          } catch (err) {
            setListOfNames((prev) => {
              return { ...prev, [name]: err.message };
            });
          }
        }
        if (links?.length > 0 && typeof links !== 'string') {
          const names = [];
          links.map(async (el) => {
            try {
              const fetch = await (await axios.get(el, { signal: controller.signal })).data;
              names.push({ name: fetch.title || fetch.name, url: fetch.url });
            } catch (err) {
              names.push(err.message);
            }
            setListOfNames((prev) => {
              return { ...prev, [name]: { names, isLoaded: names.length === links.length } };
            });
          });
        }
        return false;
      });
    })();

    return () => {
      controller.abort();
      setListOfNames({});
    };
  }, [objectWithData]);

  return { listOfNames };
}
