import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <div className="wrapper flex items-center h-[100vh] justify-center flex-col gap-6">
        <h5 className="font-bold text-2xl">404</h5>
        <p className="text-lg font-semibold">page not found</p>
        <Link className="text-dark bg-primaryColor text-white px-3 py-2" to="/">
          back to home
        </Link>
      </div>
    </div>
  );
};
export default Error;
