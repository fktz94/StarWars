import { Link } from 'react-router-dom';

function LinkListItem({ section }) {
  return (
    <Link to={section} className="hover:underline">
      go to {section} section
    </Link>
  );
}

export default function Home() {
  const sections = ['people', 'films', 'planets', 'species', 'starships', 'vehicles'];

  const links = sections.map((el) => <LinkListItem key={el} section={el} />);

  return <div className="flex flex-col">{links}</div>;
}
