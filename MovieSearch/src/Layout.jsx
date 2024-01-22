
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {Link, Outlet} from 'react-router-dom'
import "./Layout.css"

import React from 'react'

function Layout({inputSearch,onNavChange}) {
  
  return (
    <>
     
        <div className="container">
        {/* items-center rtl:space-x-reverse */}
    
     
    <nav className="navbar">
      <div className="T1 flex flex-row items-center">
      <div className="inline-flex items-center  space-x-3">
          <img src="./film_logo.png" className="FilmLogo" alt="Flowbite Logo" />
          <span className="MovieFinder"
          //  className=" self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
           >Film Haven</span>
      </div>
      <div className="flex md:order-2">
       
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <form action="" >

          <input
           type="text"
          id="search-navbar" 
          
           onInput={(e)=>{
            e.preventDefault();
            onNavChange(e);
// console.log(e.target.value);
}} 
className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Movie">
  {/* value={inputSearch} */}
</input>
          </form>
        
        </div>

        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
        <div className="FullRouter" id="navbar-search">
      
          <ul className="FullRouter flex flex-col font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link to="/"> 
              
        <button type='button' className="buttonL bg-primary-60">Home</button>
              </Link>
            </li>
            <li>
              <Link to="about">
              <button type='button' className="buttonL bg-primary-60">About</button>
              </Link>
            </li>
            <li>
              <Link to="wishlist" > <button type='button' className="buttonL bg-primary-60">Favourites</button></Link>
            </li>
            <li>
              <Link to="contact" > <button type='button' className="buttonL bg-primary-60">Contact</button></Link>
            </li>
          </ul>
        </div>
        
      </div>
      
    </nav>
    
    
    <Outlet />
    <Footer />
    </div>
   </>
  )
}

export default Layout
