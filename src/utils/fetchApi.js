import axios from 'axios';

export const baseUrl = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzAxNjcyYTMwNzA5ZWY0MzQ5NmYwNjZmNmM1NjRmMiIsInN1YiI6IjY0ZmYwZDJiZWZlYTdhMDBhYWQ2Y2ZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qFLHfeKDznKCOHFTq6XLPWP8yFn2hXuRuq0ri3gZTnk',
  },
};
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, options);
  return data;
};
