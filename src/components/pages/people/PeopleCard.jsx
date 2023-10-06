import { useMemo } from 'react';
import useParticularFetch from '../../../hooks/useParticularFetch';
import CardContainer from '../../CardContainer';
import ListItem from '../../ListItem';
import useListOfNames from '../../../hooks/useListOfNames';

export default function PeopleCard() {
  const { data, error, isLoading } = useParticularFetch();

  const {
    birth_year: birthYear,
    eye_color: eyeColor,
    films,
    gender,
    hair_color: hairColor,
    height,
    homeworld,
    mass,
    name,
    skin_color: skinColor,
    species,
    starships,
    vehicles
  } = data;

  const objectWithData = useMemo(() => {
    return { films, homeworld, species, starships, vehicles };
  }, [films, homeworld, species, starships, vehicles]);

  const { sectionsRendered } = useListOfNames(data, objectWithData);

  return (
    <CardContainer error={error} isLoading={isLoading}>
      <b>{name}</b>
      <ListItem text="height" textData={height} />
      <ListItem text="mass" textData={mass} />
      <ListItem text="hair color" textData={hairColor} />
      <ListItem text="skin color" textData={skinColor} />
      <ListItem text="eye color" textData={eyeColor} />
      <ListItem text="birth year" textData={birthYear} />
      <ListItem text="gender" textData={gender} />
      {sectionsRendered}
    </CardContainer>
  );
}
