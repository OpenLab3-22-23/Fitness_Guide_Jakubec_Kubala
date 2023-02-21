import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles


function Legpress() {


  return (
  
    <div className="h-screen w-screen bg-[url('/images/background.png')]">
      <div className="h-16 w-full ">
        <header className='bg-black p-10 flex items-center justify-center h-full'>
          <Link to="/FitnessGuide">
          <img src='/images/Logo.png' className='mr-10'></img>
          </Link>
          <h1 className="text-amber-200 font-semibold text-5xl">LEGPRESS</h1>
        </header>
     </div>
    </div> 
  )
}

export default Legpress;