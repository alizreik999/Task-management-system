import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Support from "./component/Support";
import Allinone from "./component/Allinone";
import Footer from './component/Footer';
import Contactus from './component/Contactus'
import { element } from 'prop-types';


const router=createBrowserRouter([
  {
    path:'/',
    element:<div> <Navbar/>
    <Hero/>
    <About/>  
    <Support/>
    <Allinone/>
    <Footer/> </div>
  },
  {
    path:'/Contactus',
    element:<div><Contactus/></div>
  },

])

function App() {
  return (
  <>
 
  
  <RouterProvider router={router}  ><Contactus/></RouterProvider>

  </>
  );
}

export default App;
