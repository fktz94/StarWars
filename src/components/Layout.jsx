import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <main className="flex flex-col min-h-screen bg-black/50">
      <Header />
      <section className="grow bg-red-300">
        <div className="w-3/4 m-auto">
          <Outlet />
        </div>
      </section>
      <Footer />
    </main>
  );
}
