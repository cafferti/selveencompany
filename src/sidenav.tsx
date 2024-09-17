import saulltechdash from "./assets/ic_sharp-dashboard.svg"
import { useNavigate } from 'react-router-dom';
import saulltechlog from "./assets/Icon (2).svg"
import saulltechkey from "./assets/icon (1).svg"
import saulltechlive from "./assets/mobile_friendly.svg"
import darklogo from "./assets/logo2.png"
import uploadsvg from "./assets/Upload cloud.svg"
import { NavLink, Outlet}  from 'react-router-dom'


import './App.css'



function sidenav() {
  const navigate = useNavigate();

const logout = () =>{
  navigate('/');

}


  return (

    <div className=' overflow-x-hidden relative'>

     <div>
      <nav className='bg-[#1859A6] rounded-tr-lg rounded-br-lg w-[23%] h-screen min-w-[12rem] hidden sm:block text-[#F2F2F2] font-ubuntu fixed'>
        <div>
          <img className='w-[30%] pt-3 pl-4' src={darklogo} alt="" />
        </div>

        <NavLink to="/Dash/gallery" className='flex items-center pl-[30%] mt-[5rem] py-4 hover:pl-[32%] cursor-pointer hover:border-black'>
          <img src={saulltechdash} alt="" />
          <p className='px-3'>Dasboard</p>
        </NavLink>

        <NavLink to="/Dash/upload" className='flex items-center pl-[30%] py-4 hover:pl-[32%] cursor-pointer hover:border-black'>
          <img src={uploadsvg} alt="" />
          <p className='px-3'>Upload</p>
        </NavLink>



        <a href='http://selveencompany.com.ng' className='flex items-center pl-[30%] py-4 hover:pl-[32%] cursor-pointer'>
          <img src={saulltechlive} alt="" />
          <p className='px-3'>Live site</p>
        </a>

        <NavLink to ="/Dash/password" className='flex items-center pl-[30%] py-4 hover:pl-[32%] cursor-pointer'>
          <img src={saulltechkey} alt="" />
          <p className='px-3'>Manage password</p>
        </NavLink>

        < button onClick={logout} className='  flex items-center pl-[30%] absolute w-[100%] bottom-0 border-t border-[#102e53] py-2 hover:pl-[32%] cursor-pointer'>
          <img className='w-[10%]' src={saulltechlog} alt="" />
          <p className='px-3'>Logout</p>
        </button>
      </nav>
      </div>

      <main className='w-[100%] sm:ml-[15%]'>

       <Outlet/>
      </main>

    </div>
  )
}

export default sidenav