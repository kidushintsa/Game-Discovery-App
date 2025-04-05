import { Link } from "react-router-dom";
import logo from "../assets/glogo.jpg";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <nav className="flex fixed top-0 left-0 right-0 p-2 z-10 bg-gray-900">
      <div className="flex items-center">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-11 md:w-16 lg:w-16 rounded-3xl"
          />
        </Link>
        <h5 className="ml-2 font-poppins text-white hidden md:block">
          Game Hub
        </h5>
      </div>
      <SearchInput />
    </nav>
  );
};

export default NavBar;
