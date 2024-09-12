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
    <div className='flex '>
      {/* <Signin/> */}
      {/* <Upload/> */}
      <div className='w-[70%] fixed'>
      <Sidenav/>
      </div>
      <div className=' md:ml-[20%] w-[100%]'>      < Gallery/>
      </div>
    </div>
  )
}

export default App
