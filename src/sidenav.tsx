import React from 'react';
import saulltechdash from  "./assets/ic_sharp-dashboard.svg"
import saulltechlog from "./assets/Icon (2).svg"
import saulltechkey from "./assets/icon (1).svg"
import saulltechlive from"./assets/mobile_friendly.svg"
import lightlogo from "./assets/logo1.png"
import darklogo from "./assets/logo2.png"
function sidenav() {




  return (


    <div className ='w-[100%]'>
    <nav className='bg-[#1859A6] rounded-tr-lg rounded-br-lg w-[30%] h-screen min-w-[12rem] hidden sm:block text-white font-ubuntu'>
        <div>
            <img className='w-[30%] pt-3 pl-4' src={darklogo} alt="" />
        {/* <h1 className='mx-auto w-[100%]'>SelVeen Company Lmt</h1> */}

        </div>



   <a className='flex items-center ml-[30%] mt-[5rem] py-4 hover:ml-[32%] cursor-pointer hover:border-black'>
    <img src={saulltechdash} alt="" />
    <p className='px-3'>Dasboard</p>
   </a>

   <a className='flex items-center ml-[30%] py-4 hover:ml-[32%] cursor-pointer'>
    <img src={saulltechlive} alt="" />
    <p className='px-3'>Live site</p>
   </a>

   <a className='flex items-center ml-[30%] py-4 hover:ml-[32%] cursor-pointer'>
    <img src={saulltechkey} alt="" />
    <p className='px-3'>Manage password</p>
   </a>

   <a className='flex items-center ml-[30%] py-4 hover:ml-[32%] cursor-pointer'>
    <img className='w-[10%]' src={saulltechlog} alt="" />
    <p className='px-3'>Logout</p>
   </a>


      
    </nav>


    </div>
  )
}

export default sidenav