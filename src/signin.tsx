import React from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function signin (){
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [success,setSucess] = useState ('false')

    
    const proceedLogin= (e) =>{
          e.preventDefault()
       if (Username === '') {
        toast.warning('Enter a Valid Username')
        return null
        
       }  else if (Password === '') {
        
        toast.warning('Enter a Valid Password')
        return null;
       } else{
        setSucess('true')
        return { Username, Password, success };

       }  
    };

   const login = async (e) => {
       const validparameters = proceedLogin(e)
       if (validparameters === null) {
      
       } else {

         const logindata = {
            email: Username,
            password: Password
         }
        console.log(logindata)
         const response = await fetch(' https://saul.onrender.com/api/v1/auth/signin',{
            method:'POST',
            headers:{
                "content-type": `application/json`,
            },
            body:JSON.stringify(logindata)
         });
         try{if(response.ok){
            const data = await response.json()
            console.log(data)
            console.log('good boy')
        
         }else if(response.status === 401){
           toast.warning('wrong username or password')
         }else if(response.status === 500){
            toast.warning('server error')
         }else{
            toast.warning('check your internet connection and try Again')
         }
            
         }catch(error){
            toast.warning('Network Error')
         }

         
       }
    }

     

  return (
    <div className='bg-slate-800 text-white h-screen '>
        <ToastContainer />
        <form className=' flex flex-col max-w-[30rem] mx-[auto] items-center align-middle py-[10rem] '>
            <input value={Username} onChange={ (e)=>setUsername(e.target.value)} id='Username' className='ApiName border-gray border-[2px] my-[2rem] rounded-3xl text-center py-3 px-[5rem] text-black' type="text" placeholder='Name' /> <br />
            <input value={Password} onChange={(e)=>setPassword(e.target.value)} className='ApiPassKey border-gray border-[2px] rounded-3xl text-center py-3 px-[5rem] text-black' type="text" placeholder='password' />
            <button onClick={login} className='p-3 rounded-2xl bg-white text-black my-7 px-5'>Login</button>
        </form>
        
    </div>
  )}


export default signin
