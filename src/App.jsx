import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import Error from './pages/Error';
import MovieDetails from './components/MovieDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
  },
  {
    path: '/movies/:id',
    element: <MovieDetails />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
