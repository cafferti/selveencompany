import React from 'react';
import saulltechdash from "./assets/ic_sharp-dashboard.svg"
import saulltechlog from "./assets/Icon (2).svg"
import saulltechkey from "./assets/icon (1).svg"
import saulltechlive from "./assets/mobile_friendly.svg"
import lightlogo from "./assets/logo1.png"
import darklogo from "./assets/logo2.png"
import { NavLink, Outlet}  from 'react-router-dom'
import './App.css'



function sidenav() {




  return (

    <div className='flex'>
      <nav className='bg-[#1859A6] rounded-tr-lg rounded-br-lg w-[20%] h-screen min-w-[12rem] hidden sm:block text-white font-ubuntu fixed'>
        <div>
          <img className='w-[30%] pt-3 pl-4' src={darklogo} alt="" />
        </div>

        <NavLink to="/" className='flex items-center pl-[30%] mt-[5rem] py-4 hover:pl-[32%] cursor-pointer hover:border-black'>
          <img src={saulltechdash} alt="" />
          <p className='px-3'>Dasboard</p>
        </NavLink>

        <NavLink to="/upload" className='flex items-center pl-[30%] py-4 hover:pl-[32%] cursor-pointer hover:border-black'>
          <img src={saulltechdash} alt="" />
          <p className='px-3'>Upload</p>
        </NavLink>



        <a className='flex items-center pl-[30%] py-4 hover:pl-[32%] cursor-pointer'>
          <img src={saulltechlive} alt="" />
          <p className='px-3'>Live site</p>
        </a>

        <NavLink to ="/password" className='flex items-center pl-[30%] py-4 hover:pl-[32%] cursor-pointer'>
          <img src={saulltechkey} alt="" />
          <p className='px-3'>Manage password</p>
        </NavLink>

        <NavLink to="/signin" className='flex items-center pl-[30%] py-4 hover:pl-[32%] cursor-pointer'>
          <img className='w-[10%]' src={saulltechlog} alt="" />
          <p className='px-3'>Logout</p>
        </NavLink>

      </nav>

      <main className='w-[100%] ml-[15%]'>
       <Outlet/>
      </main>

    </div>
  )
}

export default sidenav