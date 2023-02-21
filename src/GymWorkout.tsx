import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles


function GymWorkout() {
  return (
 <div className="h-screen w-screen bg-[url('/images/background.png')]">
  <div className="h-16 w-full ">
    <header className='bg-black p-10 flex items-center justify-center h-full'>
       <Link to="/FitnessGuide">
       <img src='/images/Logo.png' className='mr-10 '></img>
       </Link>
      <h1 className="text-amber-200 font-semibold text-5xl">GYMWORKOUT</h1>
    </header>

    <div className="w-full max-w-sm">
     <form>
      <div className="flex items-center py-2">
       <input className="appearance-none bg-transparent border-none w-full text-amber-200 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search..."></input>
       <button className="bg-amber-200 hover:bg-amber-400  text-sm  text-black py-1 px-2 rounded" type="button">
        Search
       </button>
      </div>
     </form>
    </div>

    <div className='flex justify-center pt-10'>
      <Link to="/Benchpress"> 
       <div>
        <img src='/images/gym/benchpress.jpeg' className='mx-20 opacity-90'></img>
       </div>
      </Link>

      <Link to="/Bicepcurls">
       <div>
        <img src='/images/gym/bicepcurls.jpeg' className='mx-20 opacity-90'></img>
       </div>
      </Link>

      <Link to="/Cableflies">
       <div>
        <img src='/images/gym/cableflies.jpeg' className='mx-20 opacity-90'></img>
       </div>
      </Link>
    </div>
    <div className='flex justify-center pt-10'>

      <Link to="/Deadlift">
       <div>
        <img src='/images/gym/deadlift.jpeg' className='mx-20 opacity-90'></img>
       </div>
      </Link>
    
      <Link to="/Legpress">
       <div>
        <img src='/images/gym/legpress.png' className='mx-20 opacity-90'></img>
       </div>
      </Link>

      <Link to="/Shoulderseatedpress">
       <div>
        <img src='/images/gym/shoulderseatedpress.jpeg' className='mx-20 opacity-90'></img>
       </div>
      </Link>
    </div>
    


  </div>
 </div>
  )
};

export default GymWorkout;