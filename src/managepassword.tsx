import React from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import darklogo from "./assets/logo2.png"
import { NavLink } from 'react-router-dom';
import lightlogo from "./assets/logo1.png"
import closeicon from './assets/Close_MD.svg'
import saulltechmenu from './assets/menu.svg'





function managepassword() {


    const [monitor, setmonitor] = useState('hidden')
    const [burger, setburger] = useState('block')
    const direct = 'border-b pb-1 pt-0 my-0 hover:text-gray-500 pb-4'
  



    const toggle = () => {
        if (monitor === 'hidden') {
          setmonitor('block')
          setburger('hidden')
    
        } else {
          setmonitor('hidden')
          setburger('block')
    
        }
      }
    
    

  return (
    
    <div className=' text-black h-screen w-[100%] py-[2%] overflow-y-hidden bg-[#f9f9f9] ' >
        <ToastContainer />

        <div className={` ${monitor} overide absolute w-[100%] text-xl text-black h-[100%] bg-[rgba(249,249,249,0.8)] mt-[-1.5rem] sm:hidden font-mono `}>
        <nav className=' w-[70%]  bg-[#F2F2F2] h-[100%] ml-[30%] flex flex-col '>
          <div className="flex justify-between px-[5%] mb-[3rem] pt-10">
            <img className="w-[3rem] " src={lightlogo} alt="" />
            <button onClick={toggle} className="w-[15%] border-gray-400 border"> <img className="w-[100%]" src={closeicon} alt="" />
            </button>

          </div>
          <NavLink className={direct} to='/Dash/gallery'> Dashboard</NavLink> <br />
          <NavLink className={direct} to='/Dash/upload'> Upload</NavLink> <br />
          <a className="active border-b border-1" href="">Live Site</a> <br />
          <NavLink className={direct} to='/Dash/password'>Manage Password</NavLink> <br />
        </nav>
      </div>
      <button onClick={toggle} className={`${burger} sm:hidden absolute right-[10%] mt-3`}>
        <img className='w-[3rem]' src={saulltechmenu} alt="" />
      </button>


        <form className=' h-[95%] border border-gray-200 flex flex-col   items-center align-middle pb-[5%] h-100%] sm:mx-[30%] md:py-[2%] '>
        <h1 className='text-3xl font-pacifico self-start mt-4 ml-[10%] mb-[20%]  text-[#FFE600]'>Password</h1>
         <p className=' text-black self-start ml-[10%] py-3 font-inter'>Change your Password</p>

            <input value={''} onChange={''} id='Username' className='ApiName border-gray border-[2px] mb-[2rem] rounded-3xl text-center p-3 w-[80%] text-black' type="text" placeholder='old password' /> <br />
            <input value={''} onChange={''} className='ApiPassKey border-gray border-[2px] rounded-3xl text-center py-3 w-[80%] text-black' type="text" placeholder='New password' />
            <button onClick={''} className='p-3 rounded-2xl bg-[#263A5C] text-white my-7 px-5 hover:bg-blue-950 hover:text-white'>Login</button>
        </form>
    </div>
  )
}

export default managepassword