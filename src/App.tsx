// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Signin from './signin'
import Upload from './upload'
import Gallery from './gallery'
import Sidenav from './sidenav'
import { BrowserRouter, Routes, Route, Link, createBrowserRouter,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import sidenav from './sidenav'
import upload from './upload'

 {/* <Sidenav/> */}

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/"  element={<Sidenav/>} >
    <Route index element = {<Gallery/>} />
    <Route path='/upload' element = {<Upload/>} />
    <Route path='/signin' element = {<Signin/>} />

 </Route>

  )
)


function App() {
  return (
<RouterProvider router={router}/>

    
     
  

  );
}

export default App
