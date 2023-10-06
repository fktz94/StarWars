import { useMemo } from 'react';
import useParticularFetch from '../../../hooks/useParticularFetch';
import CardContainer from '../../CardContainer';
import ListItem from '../../ListItem';
import useListOfNames from '../../../hooks/useListOfNames';

export default function FilmsCard() {
  const { data, error, isLoading } = useParticularFetch();

  const {
    title,
    director,
    producer,
    release_date: releaseDate,
    opening_crawl: openingCrawl,
    characters,
    planets,
    starships,
    vehicles,
    species
  } = data;

  const objectWithData = useMemo(() => {
    return { characters, planets, starships, vehicles, species };
  }, [characters, planets, starships, vehicles, species]);

  const { sectionsRendered } = useListOfNames(data, objectWithData);

  return (
    <CardContainer error={error} isLoading={isLoading}>
      <b>{title}</b>
      <ListItem text="director" textData={director} />
      <ListItem text="producer" textData={producer} />
      <ListItem text="release date" textData={releaseDate} />
      <ListItem text="opening crawl" textData={openingCrawl} />
      {sectionsRendered}
    </CardContainer>
  );
}
