import { useGlobalContext } from '../context';
import Movie from './Movie';
import { useEffect } from 'react';

const SearchMovies = ({ search }) => {
  const { fetchMoviesByTitle, isLoading, searchData } = useGlobalContext();
  useEffect(() => {
    fetchMoviesByTitle(search);
  }, [search]);
  if (isLoading) {
    return (
      <div className="modal flex justify-center items-center bg-white w-full absolute top-[100%] rounded-lg overflow-scroll scroll-smooth h-[600px] shadow-2xl p-6">
        <div className="loading"></div>
      </div>
    );
  }
  if (searchData?.results?.length === 0) {
    return (
      <div className="modal flex justify-center items-center bg-white w-full absolute top-[100%] rounded-lg overflow-scroll scroll-smooth h-[600px] shadow-2xl p-6">
        <p className="text-primaryColor text-xl">No results found...</p>
      </div>
    );
  }
  return (
    <div className="modal bg-white w-full absolute top-[100%] rounded-lg overflow-scroll scroll-smooth h-[600px] shadow-2xl p-6">
      <div className="cards">
        {searchData?.results?.map((item) => {
          return <Movie key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
export default SearchMovies;
