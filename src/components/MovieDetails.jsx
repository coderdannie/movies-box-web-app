import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';
import img from '../assets/img-bg.png';
const MovieDetails = () => {
  const { fetchMovieDetails, fullData, isLoading } = useGlobalContext();

  const { id } = useParams();
  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);
  const { title, release_date, runtime, overview, poster_path, genres } =
    fullData;

  const posterImg = `http://image.tmdb.org/t/p/w154${poster_path}`;
  function convertToUTC(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date.toUTCString();
  }
  const utcDateString = convertToUTC(release_date);

  function secondsToMinutes(runtimeInSeconds) {
    if (typeof runtimeInSeconds !== 'number') {
      return 'Invalid input';
    }

    const minutes = Math.floor(runtimeInSeconds / 60);
    const seconds = runtimeInSeconds % 60;

    const durationString = `${minutes} minutes ${seconds} seconds`;

    return durationString;
  }

  // Example usage:
  const runtimeInSeconds = runtime;
  const runtimeInMinutes = secondsToMinutes(runtimeInSeconds);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <main>
      <div className="wrapper py-[100px]">
        <Link
          className="px-4 text-white rounded-md  py-2 bg-primaryColor"
          to="/"
        >
          Back to home
        </Link>
        <article>
          <div className="h2 my-4 ">Movie details</div>
          <div className="img-container h-[370px]">
            <img
              data-testid="movie-poster"
              className="object-cover h-full w-full"
              src={poster_path ? posterImg : img}
              alt=""
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 py-6">
            <div className="flex md:items-center flex-col md:flex-row md:gap-6 gap-2">
              <h3
                className="font-bold md:text-lg lg:text-2xl"
                data-testid="movie-title"
              >
                <span className="font-medium">Title:</span>
                {title}
              </h3>
              <p
                className="font-bold md:text-xl text-[#404040]"
                data-testid="movie-release-date"
              >
                {utcDateString}
              </p>
              <p
                className="font-bold md:text-xl text-[#404040]"
                data-testid="movie-runtime"
              >
                {runtimeInMinutes}
              </p>
            </div>
            <div className="flex h-fit gap-2">
              {genres?.map((item) => {
                return (
                  <p
                    className="text-primaryColor font-medium text-sm rounded-2xl border-primaryColor border-2 py-1 px-2"
                    key={item.id}
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
          </div>
          <p data-testid="movie-overview">{overview}</p>
        </article>
      </div>
    </main>
  );
};
export default MovieDetails;
