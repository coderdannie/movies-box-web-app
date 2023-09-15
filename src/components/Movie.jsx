import { Link } from 'react-router-dom';
import heartIcon from '../assets/Heart.svg';
import img from '../assets/img-bg.png';
const Movie = ({ release_date, title, poster_path, id }) => {
  const posterImg = `http://image.tmdb.org/t/p/w154${poster_path}`;
  return (
    <>
      {' '}
      <Link
        to={`movies/${id}`}
        data-testid="movie-card"
        className="card w-full pb-6"
      >
        <div className="relative">
          <div className="img-container h-[370px]">
            <img
              className="object-cover h-full w-full"
              data-testid="movie-poster"
              src={poster_path ? posterImg : img}
              alt=""
            />
          </div>
          <span className="absolute  top-6 right-[22px] uppercase rounded-full  bg-gray-400 p-1 font-bold text-xs ">
            <img src={heartIcon} alt="heart icon" />
          </span>
        </div>
        <div className="card-text">
          <p
            data-testid="movie-release-date"
            className="movie-date text-gray-400 text-sm font-bold my-3"
          >
            {release_date}
          </p>
          <h3
            data-testid="movie-title"
            className="md:text-lg text-[#111827] font-bold"
          >
            {title}
          </h3>
        </div>
      </Link>
    </>
  );
};
export default Movie;
