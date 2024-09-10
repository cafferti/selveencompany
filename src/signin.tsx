import React from 'react'
import { useState } from 'react'

function signin() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    

 const Submitbtn = () =>{
   console.log('how are you')
 }
  return (
    <div className='bg-slate-800 text-white h-screen '>
        <form className=' flex flex-col max-w-[30rem] mx-[auto] items-center align-middle py-[10rem] '>
            <input className=' ApiName border-gray border-[2px] my-[2rem] rounded-3xl text-center py-3 px-[5rem] text-black' type="text" placeholder='Name' /> <br />
            <input className='ApiPassKey border-gray border-[2px] rounded-3xl text-center py-3 px-[5rem] text-black' type="text" placeholder='password' />
            <p onClick={Submitbtn} className='p-3 rounded-2xl bg-white text-black my-7 px-5'>Login</p>
        </form>
        
    </div>
  )
}

export default signin