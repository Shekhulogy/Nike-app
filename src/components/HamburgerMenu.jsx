import { cross } from "../assets/icons";
import { navLinks } from "../constants";

const HamburgerMenu = ({ closeHamMenu }) => {
  return (
    <div className="absolute w-full h-full z-20  ">
      <div
        className=" w-full h-full backdrop-blur-sm"
        onClick={closeHamMenu}
      ></div>
      <div
        className=" w-64 h-72 p-2 top-6 right-14 rounded-2xl absolute 
      bg-white shadow-2xl animate-shrink-out
      max-sm:top-0 max-sm:right-0 max-sm:w-full max-sm:h-80 max-sm:animate-slide-out"
      >
        <div
          className="mt-1 mr-1 flex justify-end max-sm:mt-7 max-sm:mr-7"
          onClick={closeHamMenu}
        >
          <img src={cross} alt="cross" width={16} height={16} className="" />
        </div>

        <ul className=" max-sm:mt-3 animate-fade-in ">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="p-4 flex justify-center items-center 
            text-slate-gray font-palanquin font-bold border-b 
            last:border-b-0 hover:bg-gradient-to-b from-transparent 
            to-slate-200 "
              onClick={closeHamMenu}
            >
              <a href={item.href}> {item.label} </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
