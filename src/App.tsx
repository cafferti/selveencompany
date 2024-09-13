// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Signin from './signin'
import Upload from './upload'
import Gallery from './gallery'
import Sidenav from './sidenav'


function App() {
  return (
    <div className='flex bg-[#f9f9f9] '>
      {/* <Signin/> */}
      {/* <Upload/> */}
      <div className='w-[30%] fixed'>
      <Sidenav/>
      </div>
      <div className='sm:ml-[23%]   w-[100%]'> < Gallery/>
      </div>
    </div>
  )
}

export default App
