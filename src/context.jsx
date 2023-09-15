import { createContext, useContext, useEffect, useState } from 'react';

import { baseUrl, fetchApi } from './utils/fetchApi';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fullData, setFullData] = useState('');
  const fetchTopRatedMovies = async () => {
    try {
      setIsLoading(true);
      const movies = await fetchApi(`${baseUrl}/movie/top_rated`);
      setData(movies);
      setIsLoading(false);
    } catch (error) {
      return error.response;
    }
  };
  const fetchMoviesByTitle = async (title) => {
    try {
      setIsLoading(true);
      const movies = await fetchApi(
        `${baseUrl}/search/movie?query=${title}&include_adult=false&language=en-US&page=1`
      );
      setSearchData(movies);
      setIsLoading(false);
    } catch (error) {
      return error.response;
    }
  };
  const fetchMovieDetails = async (id) => {
    try {
      setIsLoading(true);
      const movieDetails = await fetchApi(
        `${baseUrl}/movie/${id}?language=en-US`
      );
      setFullData(movieDetails);
      setIsLoading(false);
    } catch (error) {
      return error.response;
    }
  };

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        data,
        fetchMoviesByTitle,
        searchData,
        fetchMovieDetails,
        fullData,
        setFullData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
