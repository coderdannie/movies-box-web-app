import imbLogo from '../assets/imb.svg';
import item from '../assets/PngItem.png';
import { AiFillPlayCircle } from 'react-icons/ai';
const Hero = () => {
  return (
    <div className="hero text-center md:text-left mt-[100px]">
      <h1 className="text-white font-bold ">
        John Wick 3 : <br /> Parabellum
      </h1>
      <div className="flex justify-center md:justify-normal gap-8 py-4 ">
        <div className="flex place-items-center text-white gap-4">
          <img src={imbLogo} alt="imb logo" />
          86.0 / 100
        </div>
        <div className="flex place-items-center text-white gap-4">
          <img src={item} alt="fruit logo" />
          97%
        </div>
      </div>
      <p className="text-white max-w-[34ch] mx-auto md:mx-0 font-medium">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>
      <a
        className="py-[6px] px-4 bg-primaryColor uppercase font-bold mt-6 inline-block rounded-md border-pink-600 border-2 text-white"
        href="/"
      >
        <AiFillPlayCircle className="inline mr-2" />
        Watch trailer
      </a>
    </div>
  );
};
export default Hero;
