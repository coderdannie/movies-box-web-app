import Movie from './Movie';
import { useGlobalContext } from '../context';
import { IoIosArrowForward } from 'react-icons/io';
const Movies = () => {
  const { isLoading, data } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="py-[50px] md:py-[70px]">
      <div className="wrapper">
        <div className="flex justify-between mb-[40px] md:mb-[54px] ">
          <h2>Featured Movie</h2>
          <button className="md:text-lg text-primaryColor ">
            See More
            <IoIosArrowForward className="text-primaryColor inline" />
          </button>
        </div>
        <div className="cards">
          {data.results.slice(0, 10).map((item) => {
            return <Movie key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Movies;
