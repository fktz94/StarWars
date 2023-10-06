import { useMemo } from 'react';
import useParticularFetch from '../../../hooks/useParticularFetch';
import CardContainer from '../../CardContainer';
import ListItem from '../../ListItem';
import useListOfNames from '../../../hooks/useListOfNames';

export default function PeopleCard() {
  const { data, error, isLoading } = useParticularFetch();

  const {
    name,
    climate,
    diameter,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    terrain,
    gravity,
    surface_water: surfaceWater,
    population,
    residents,
    films
  } = data;

  const objectWithData = useMemo(() => {
    return { residents, films };
  }, [residents, films]);

  const { sectionsRendered } = useListOfNames(data, objectWithData);

  return (
    <CardContainer error={error} isLoading={isLoading}>
      <b>{name}</b>
      <ListItem text="climate" textData={climate} />
      <ListItem text="terrain" textData={terrain} />
      <ListItem text="diameter" textData={diameter} />
      <ListItem text="rotation period" textData={rotationPeriod} />
      <ListItem text="orbital period" textData={orbitalPeriod} />
      <ListItem text="gravity" textData={gravity} />
      <ListItem text="surface water" textData={surfaceWater} />
      <ListItem text="population" textData={population} />
      {sectionsRendered}
    </CardContainer>
  );
}
