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

      <form onSubmit={collectonsubmit} className='bg-slate-900 text-white h-screen  w-[100%]'>
        <input name='description' placeholder='Description' className=' bg-inherit border-[5px] px-3 w-[100%] max-w-[20rem] border-gray-800 ml-5 mt-4 py-2 rounded-2xl' type="text" /> <br />
        <input name='imageUrl' placeholder='image URL' className=' bg-wh border-[5px] px-3 w-[100%] max-w-[20rem] border-gray-800 ml-5 mt-4 py-2 rounded-2xl bg-inherit' type="file" /> <br />
        <input name='price' placeholder='Price' className=' bg-inherit border-[5px] px-3 w-[100%] max-w-[20rem] border-gray-800 ml-5 mt-4 py-2 rounded-2xl' type="text" /> <br />

        <input name='name' placeholder='Name' className=' bg-inherit border-[5px] px-3 w-[100%] max-w-[20rem] border-gray-800 ml-5 mt-4 py-2 rounded-2xl' type="text" /> <br />
        <button className='p-2 rounded-2xl bg-white text-black my-2 px-5 ml-5'>Upload</button>
      </form>

    </div>

  )
}

export default upload