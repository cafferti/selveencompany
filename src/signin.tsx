import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import darklogo from "./assets/logo2.png"
import {PulseLoader,CircleLoader} from 'react-spinners';






function signin() {
   const [Username, setUsername] = useState('')
   const [Password, setPassword] = useState('')
   const [success, setSucess] = useState('false')
   const navigate = useNavigate();
   const [loading, setwaiting] = useState(false)

   const proceedLogin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (Username === '') {
         toast.warning('Enter a Valid Username')
         return null

      } else if (Password === '') {

         toast.warning('Enter a Valid Password')
         return null;
      } else {
         setSucess('true')
         return { Username, Password, success };

      }
   };

   const login = async (e: React.FormEvent<HTMLFormElement>) => {
      const validparameters = proceedLogin(e)

      if (validparameters === null) {

      } else {

         const logindata = {
            email: Username,
            password: Password
         }
         console.log(logindata)
         setwaiting(true)
         const response = await fetch(' https://saul-8bpn.onrender.com/api/v1/auth/signin', {
            method: 'POST',
            headers: {
               "content-type": `application/json`,
            },
            body: JSON.stringify(logindata)
         });
         try {
            if (response.ok) {
               const data = await response.json()
               toast.success('Admin Logged In Sucessfully')
               const token = data.data.token;
               localStorage.setItem('token', token);
               setwaiting(false)
               navigate('/dash/gallery');
            } else if (response.status === 401) {
               toast.warning('wrong username or password')
               setwaiting(false)

            } else if (response.status === 500) {
               toast.warning('server error')
            } else {
               toast.warning('check your internet connection and try Again')
            }

         } catch (error) {
            toast.warning('Network Error')
         }


      }
   }



   return (
      <div className='bg-slate-800 text-white h-screen w-[100%] py-[5%] overflow-y-hidden ' >
         <ToastContainer />

         <div className='flex px-[5%] align-middle justify-between items-center font-pacifico text-3xl mb-4 sm:h-[1%] '>
            <img className='w-[25%] sm:w-[10%] opacity-50' src={darklogo} alt="" />
            <p>Login</p>
         </div>
         <form onSubmit={login}  className=' border border-gray-700 flex flex-col  mx-[10%] items-center align-middle py-[20%] h-100%] sm:mx-[30%] md:py-[5rem] '>


            {loading ? (
               <div className={`spinner-containerabs w-[100%]`}>
                  <PulseLoader className={`ml-[40%]`} color={"#f2f2f2"} loading />
               </div>

            ) : (<div className={`spinner-containerabs w-[100%]`}>
               <CircleLoader className={`ml-[40%]`} color={"#f2f2f2"} loading />
            </div>
            )
            }

            <input value={Username} onChange={(e) => setUsername(e.target.value)} id='Username' className='ApiName border-gray border-[2px] my-[2rem] rounded-3xl text-center py-3 w-[80%] text-black' type="text" placeholder='Name' /> <br />
            <input value={Password} onChange={(e) => setPassword(e.target.value)} className='ApiPassKey border-gray border-[2px] rounded-3xl text-center py-3 w-[80%] text-black' type="password" placeholder='password' />
            <button className='p-3 rounded-2xl bg-white text-black my-7 px-5 hover:bg-blue-950 hover:text-white'>Login</button>
         </form>
      </div>
   )
}


export default signin
