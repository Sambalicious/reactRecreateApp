import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import logo from '../../utils/img/logo.png'


const NavBar = () => {
    return ( 
        <nav className="flex items-right justify-between flex-wrap bg-white p-6  ">
  <div className="flex items-center flex-shrink-0 text-black mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">Recreational App</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-right px-3 py-2 border rounded text-black-200 border-black-400 hover:text-white hover:border-blue-500">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
    <div className="justify-end text-md lg:flex-grow">
      <Link to="/special-offer" className="block mt-4 lg:inline-block lg:mt-0 text-black-200  hover:bg-blue-500 py-2 px-2 hover:text-white mr-6">
        Special Offers
      </Link>
      <Link to="/gallery" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:bg-blue-500 py-2 px-2 hover:text-white mr-6">
        Gallery
      </Link>
      <Link to="/about-us" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:bg-blue-500 py-2 px-2 hover:text-white mr-6">
        About Us
      </Link>
      <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:bg-blue-500 py-2 px-2  hover:text-white">
        Login
      </Link>
    </div>
    
  </div>
</nav>
     );
}
 
export default NavBar;