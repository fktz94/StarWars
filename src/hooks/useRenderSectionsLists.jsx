import { Link } from 'react-router-dom';
import getUrlToLinkTo from '../utilities/getUrlToLinkTo';
import useListOfNames from './useListOfNames';

export default function useRenderSectionsLists(data, objectWithData) {
  const { listOfNames } = useListOfNames(objectWithData);

  const mappedTitles = (section) => {
    const sectionToMap = listOfNames[section];
    return (
      <ul className="flex flex-col">
        {typeof sectionToMap.name === 'string' ? (
          <Link
            to={`${getUrlToLinkTo(sectionToMap.url)}`}
            key={sectionToMap.name}
            className="hover:underline">
            {sectionToMap.name}
          </Link>
        ) : (
          sectionToMap.names?.map((item) => {
            return (
              <Link to={`${getUrlToLinkTo(item.url)}`} key={item.name} className="hover:underline">
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
