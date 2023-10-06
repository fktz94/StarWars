import { useMemo } from 'react';
import useParticularFetch from '../../../hooks/useParticularFetch';
import CardContainer from '../../CardContainer';
import ListItem from '../../ListItem';
import useListOfNames from '../../../hooks/useListOfNames';

export default function StarshipsCard() {
  const { data, error, isLoading } = useParticularFetch();

  const {
    name,
    model,
    manufacturer,
    cost_in_credits: costInCredits,
    length,
    max_atmosphering_speed: maxAtmospheringSpeed,
    crew,
    passengers,
    cargo_capacity: cargoCapacity,
    consumables,
    hyperdrive_rating: hyperdriveRating,
    MGLT,
    starship_class: starshipClass,
    pilots,
    films
  } = data;

  const objectWithData = useMemo(() => {
    return { pilots, films };
  }, [pilots, films]);

  const { sectionsRendered } = useListOfNames(data, objectWithData);

  return (
    <CardContainer error={error} isLoading={isLoading}>
      <b>{name}</b>
      <ListItem text="model" textData={model} />
      <ListItem text="manufacturer" textData={manufacturer} />
      <ListItem text="cost in credits" textData={costInCredits} />
      <ListItem text="length" textData={length} />
      <ListItem text="max atmosphering speed" textData={maxAtmospheringSpeed} />
      <ListItem text="crew" textData={crew} />
      <ListItem text="passengers" textData={passengers} />
      <ListItem text="cargo capacity" textData={cargoCapacity} />
      <ListItem text="consumables" textData={consumables} />
      <ListItem text="hyperdrive rating" textData={hyperdriveRating} />
      <ListItem text="MGLT" textData={MGLT} />
      <ListItem text="starship class" textData={starshipClass} />
      {sectionsRendered}
    </CardContainer>
  );
}
