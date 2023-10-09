import { useMemo } from 'react';
import useParticularFetch from '../../../hooks/useParticularFetch';
import CardContainer from '../../CardContainer';
import ListItem from '../../ListItem';
import useRenderSectionsLists from '../../../hooks/useRenderSectionsLists';

export default function SpeciesCard() {
  const { data, error, isLoading } = useParticularFetch();

  const {
    name,
    classification,
    designation,
    average_height: averageHeight,
    skin_colors: skinColors,
    hair_colors: hairColors,
    eye_colors: eyeColors,
    average_lifespan: averageLifespan,
    homeworld,
    language,
    people,
    films
  } = data;

  const objectWithData = useMemo(() => {
    return { homeworld, people, films };
  }, [homeworld, people, films]);

  const { sectionsRendered } = useRenderSectionsLists(data, objectWithData);

  return (
    <CardContainer error={error} isLoading={isLoading}>
      <b>{name}</b>
      <ListItem text="classification" textData={classification} />
      <ListItem text="designation" textData={designation} />
      <ListItem text="average height" textData={averageHeight} />
      <ListItem text="skin colors" textData={skinColors} />
      <ListItem text="hair colors" textData={hairColors} />
      <ListItem text="eye colors" textData={eyeColors} />
      <ListItem text="average lifespan" textData={averageLifespan} />
      <ListItem text="language" textData={language} />
      {sectionsRendered}
    </CardContainer>
  );
}
