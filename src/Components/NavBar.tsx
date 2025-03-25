// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/glogo.jpg";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <nav className="flex">
      <div className="flex p-2">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-11 md:w-16 lg:w-16 rounded-3xl"
          />
        </Link>
        <h5 className="my-auto ms-1 font-poppins text-white hidden md:block">
          Game Hub
        </h5>
      </div>
      <SearchInput />
    </nav>
  );
};

export default NavBar;
