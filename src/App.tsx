// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Signin from './signin'
import Upload from './upload'
import Gallery from './gallery'
import Sidenav from './sidenav'
import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Managepassword from './managepassword'

 {/* <Sidenav/> */}

const router = createBrowserRouter(
  createRoutesFromElements(
<>
      {/* Route for Signin page */}
      <Route path="/" element={<Signin />} />

      {/* Route for the dashboard with Sidenav */}
      <Route path="/dash" element={<Sidenav />}>
        {/* Nested routes within Sidenav */}
        <Route index element={<Gallery />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="upload" element={<Upload />} />
        <Route path="password" element={<Managepassword />} />
      </Route>
    </>  )
)


function App() {
  return (
<RouterProvider router={router}/>

    
     
  

  );
}

export default App
