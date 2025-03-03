// import React from 'react'
import logo from "../assets/glogo.jpg"
const NavBar = () => {
  return (
    <nav className='col-span-5 flex'>
      <div className="border flex p-2">
        <img src={logo} alt="logo" className="w-11 md:w-16 lg:w-16 rounded-3xl"/>
        <h5 className="my-auto ms-1">Nav</h5>
      </div>
    </nav>
  )
}

export default NavBar