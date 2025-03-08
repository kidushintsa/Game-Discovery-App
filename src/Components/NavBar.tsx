// import React from 'react'
import logo from "../assets/glogo.jpg"
import SearchInput, { Props } from "./searchInput"
const NavBar = ({ onSearch }: Props) => {
  return (
    <nav className="flex">
      <div className="flex p-2">
        <img src={logo} alt="logo" className="w-11 md:w-16 lg:w-16 rounded-3xl" />
        <h5 className="my-auto ms-1 font-poppins text-white hidden md:block">
          Game Hub
        </h5>
      </div>
      <SearchInput onSearch={onSearch} />
    </nav>
  );
};


export default NavBar