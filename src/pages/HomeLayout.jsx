import { Footer } from '../components';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  return (
    <>
      <header className="header">
        <div className="wrapper font-sans relative">
          <Navbar />
          <Hero />
        </div>
      </header>
      <Movies />
      <Footer />
    </>
  );
};
export default HomeLayout;
