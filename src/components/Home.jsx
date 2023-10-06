import { Link } from 'react-router-dom';

function LinkListItem({ section }) {
  return (
    <Link to={section} className="hover:underline">
      go to {section} section
    </Link>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <LinkListItem section="people" />
      <LinkListItem section="films" />
      <LinkListItem section="planets" />
      <LinkListItem section="species" />
      <LinkListItem section="starships" />
      <LinkListItem section="vehicles" />
    </div>
  );
}
