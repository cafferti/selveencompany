import React from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sampleimg from './assets/chris-ried-ieic5Tq8YMk-unsplash.jpg'


const collectonsubmit = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget) //e.formdata gets the inputs which the function and event handler is attached to i.e(collectonsubmit.e)//
  console.log(formData);
  {
    // const description = formData.get('description');
    // const imageurl = formData.get('imageurl');
    // const price = formData.get('price');
    // const name = formData.get('name');

    // console.log(description)
    // console.log(imageurl)
    // console.log(price)
    // console.log(name)  

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
        toast.success('Upload successful!');
      } else {
        toast.error(`Upload failed: ${response.statusText}`);
      }
    } catch (error) {
      toast.error('Network error: Unable to send request');
      console.error('Error:', error);
    }

  }

  //send to server//


  // e.currentTarget.reset();

}


//to clear inputs//



function upload() {
  return (
    <div className=' '>
      <ToastContainer />

      <form onSubmit={collectonsubmit} className=' flex flex-col text-center items-center text-black border sm:ml-[10rem] sm:mr-[30%] md:px-0 sm:px-[10%] bg-[blu]  h-screen justify-between sm:justify-normal my-3'>
        <h1 className=' font-pacifico pt-[1rem] pb-[4rem] text-3xl text-[#FFE600]  '>Upload File</h1>
        <p className='text-[#B1B5B9] px-[5%]'>Enter item description</p>
        <textarea name='description' placeholder='Description' className=' bg-inherit border px-3 w-[80%] sm:w-[100%] max-w-[25rem] border-gray-800 ml-5 mt-4 py-2 rounded-2xl' type="text" /> <br />
        <input name='imageUrl' placeholder='image URL' className='  border px-3 w-[80%]  sm:w-[100%] max-w-[25rem] border-gray-800 ml-5 mt-4 py-2 rounded-2xl bg-inherit' type="file" /> <br />
        <input name='price' placeholder='Price' className=' bg-inherit border px-3 w-[80%]  sm:w-[100%] max-w-[25rem] border-gray-800 ml-5 mt-4 py-2 rounded-2xl' type="text" /> <br />

        <input name='name' placeholder='Name' className=' bg-inherit border w-[80%]  px-3 sm:w-[100%] max-w-[25rem] border-gray-800 ml-5 mt-4 py-2 rounded-2xl' type="text" /> <br />
        <div className='bg-[#B1B5B9] w-[100%] h-[0.5px] '></div>
        
        <button className='border p-2 rounded-2xl text-white text-black my-2 px-5 ml-5 bg-[#263A5C]'>Upload</button>
      </form>

    </div>

  )
}

export default upload