import { useEffect, useState } from 'react';
import logo from '../assets/tv.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiMiniBars2 } from 'react-icons/hi2';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';
import SearchMovies from './SearchMovies';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav relative text-white py-6 grid grid-cols-2 md:place-items-center justify-between  gap-6">
      <div className="logon flex place-items-center justify-self-start gap-4 md:gap-6">
        <img src={logo} alt="movie-box logo" />
        <span className=" md:text-2xl font-bold"> MovieBox</span>
      </div>
      <form
        className="nav-form  flex  place-items-center rounded-md  border-white border-2 search-form md:w-full"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className=" bg-transparent py-[6px] focus:border-0 px-3 w-full placeholder:text-white"
          value={search}
          placeholder="What do you want to watch"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <AiOutlineSearch className="mx-6" />
        </button>
      </form>
      <div className="nav-logo flex place-items-center gap-4 justify-self-end">
        <span className="font-bold ">Sign in</span>{' '}
        <button className=" rounded-full bg-primaryColor w-[36px] h-[36px]">
          <HiMiniBars2 className="text-2xl mx-auto  " />
        </button>
      </div>
      {open && <SearchMovies search={search} />}
    </nav>
  );
};
export default Navbar;
