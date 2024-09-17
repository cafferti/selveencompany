import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import lightlogo from "./assets/logo1.png"
import closeicon from './assets/Close_MD.svg'
import saulltechmenu from './assets/menu.svg'
import { BarLoader } from 'react-spinners';






function upload() {

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

  const [monitorloader, setmonitorloader] = useState('hidden')


  const collectonsubmit = async (e) => {

    e.preventDefault()

    const formData = new FormData(e.currentTarget) //e.formdata gets the inputs which the function and event handler is attached to i.e(collectonsubmit.e)//
    console.log(formData);
    {
      // const description = formData.get('description');
      // const imageurl = formData.get('imageurl');
      // const price = formData.get('price');
      // const name = formData.get('name');


      //shorter method//
    }
    const data = Object.fromEntries(formData)
    console.log(data)

    //now to get an array of just the values//
    const values = [...formData.values()]
    console.log(values)
    //getting the values and check if anyone is empty so you will throw an error
    const oneisempty = values.includes('')
    if (oneisempty) {
      toast.warning('please fill all details')
      return
    } else {
      setmonitorloader('block')
      toast.success('communicating with server....')
      try {
        const response = await fetch('https://saul.onrender.com/api/v1/gallery/add', {
          method: 'POST',
          body: formData, // Pass formData directly to the backend
          headers: {
            // Do not set the content-type when sending FormData as fetch will handle that
          }
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log('Response:', responseData);
          toast.success('Upload successful! ~saulltech');
          setmonitorloader('hidden')

        } else {
          toast.error(`check your connectionand try again,: ${response.statusText}`);
          setmonitorloader('hidden')

        }
      } catch (error) {
        toast.error('Network error: Unable to send request');
        console.error('Error:', error);
      }

    }

    //send to server//


    // e.currentTarget.reset();

  }



  return (
    <div className=' bg-[#f9f9f9] mt-[-1rem] h-[100%] '>
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
      <button onClick={toggle} className={`${burger} sm:hidden absolute right-[10%] mt-6`}>
        <img className='w-[3rem]' src={saulltechmenu} alt="" />
      </button>




      <form onSubmit={collectonsubmit} className=' flex flex-col text-center items-center text-black border sm:ml-[10rem] sm:mr-[30%] md:px-0 sm:px-[10%] bg-[blu] sm:justify-around  h-screen justify-between sm:justify-normal my-3'>

        <h1 className=' self-start sm:self-center pl-6 pt-7 font-pacifico sm:pt-[1rem] pb-[4rem] text-3xl text-[#FFE600]  '>Upload File</h1>
        <p className='text-[#B1B5B9] px-[5%]'>Enter item description</p>
        <div className={`spinner-containerabs w-[100%] ${monitorloader}`}>
          <BarLoader className={`ml-[40%]`} color={"#123abc"} loading />
        </div>

        <textarea name='description' placeholder='Description' className=' bg-inherit  px-3 w-[80%] sm:w-[100%] max-w-[25rem] border-gray border-[2px] ml-5 mt-4 py-3 rounded-3xl' /> <br />
        <input name='imageUrl' placeholder='image URL' className='  px-3 w-[80%]  sm:w-[100%] max-w-[25rem] border-gray border-[2px] ml-5 mt-4 py-3 rounded-3xl bg-inherit' type="file" /> <br />
        <input name='price' placeholder='Price' className=' bg-inherit  px-3 w-[80%]  sm:w-[100%] max-w-[25rem] border-gray border-[2px] ml-5 mt-4 py-3 rounded-3xl' type="text" /> <br />

        <input name='name' placeholder='Name' className=' bg-inherit w-[80%]  px-3 sm:w-[100%] max-w-[25rem] border-gray border-[2px] ml-5 mt-4 py-3 rounded-3xl' type="text" /> <br />
        <div className='bg-[#B1B5B9] w-[100%] h-[0.5px] '></div>

        <button className='border p-2 rounded-2xl text-white my-2 px-5 ml-5 bg-[#263A5C]'>Upload</button>
      </form>

    </div>

  )
}

export default upload