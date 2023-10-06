import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import PeoplePage from './components/pages/people/PeoplePage';
import PeopleCard from './components/pages/people/PeopleCard';
import FilmsPage from './components/pages/films/FilmsPage';
import FilmsCard from './components/pages/films/FilmsCard';
import PlanetsPage from './components/pages/planets/PlanetsPage';
import PlanetsCard from './components/pages/planets/PlanetsCard';
import SpeciesPage from './components/pages/species/SpeciesPage';
import SpeciesCard from './components/pages/species/SpeciesCard';
import StarshipsPage from './components/pages/starships/StarshipsPage';
import StarshipsCard from './components/pages/starships/StarshipsCard';
import VehiclesPage from './components/pages/vehicles/VehiclesPage';
import VehiclesCard from './components/pages/vehicles/VehiclesCard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="people/:id" element={<PeopleCard />} />
          <Route path="films" element={<FilmsPage />} />
          <Route path="films/:id" element={<FilmsCard />} />
          <Route path="planets" element={<PlanetsPage />} />
          <Route path="planets/:id" element={<PlanetsCard />} />
          <Route path="species" element={<SpeciesPage />} />
          <Route path="species/:id" element={<SpeciesCard />} />
          <Route path="starships" element={<StarshipsPage />} />
          <Route path="starships/:id" element={<StarshipsCard />} />
          <Route path="vehicles" element={<VehiclesPage />} />
          <Route path="vehicles/:id" element={<VehiclesCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
