import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getUrl from '../utilities/getUrlToLinkTo';

export default function useListOfNames(data, objectWithData) {
  const [listOfNames, setListOfNames] = useState({});

  useEffect(() => {
    (() => {
      Object.entries(objectWithData).map(async ([name, links]) => {
        if (typeof links === 'string') {
          try {
            const fetch = await (await axios.get(links)).data;
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
              const fetch = await (await axios.get(el)).data;
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

    return () => setListOfNames({});
  }, [objectWithData]);

  const mappedTitles = (section) => {
    const sectionToMap = listOfNames[section];
    return (
      <ul className="flex flex-col">
        {typeof sectionToMap.name === 'string' ? (
          <Link
            to={`${getUrl(sectionToMap.url)}`}
            key={sectionToMap.name}
            className="hover:underline">
            {sectionToMap.name}
          </Link>
        ) : (
          sectionToMap.names?.map((item) => {
            return (
              <Link to={`${getUrl(item.url)}`} key={item.name} className="hover:underline">
                {item.name}
              </Link>
            );
          })
        )}
      </ul>
    );
  };

  const sectionRendered = (section) => {
    return (
      data[section]?.length > 0 && (
        <div key={section}>
          <b>{section}:</b> {listOfNames[section]?.isLoaded ? mappedTitles(section) : 'loading...'}
        </div>
      )
    );
  };

  const sectionsRendered = Object.keys(objectWithData).map((el) => sectionRendered(el));

  return { sectionsRendered };
}
