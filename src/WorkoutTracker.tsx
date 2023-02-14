import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles


function FitnessGuide() {


  return (
  
  <div className="h-full w-full bg-[url('/images/background.png')] font-semibold">
    <header className='bg-black p-10 flex items-center justify-between'>
      <nav className='flex'>
        <Link to="/Log">
          <a href="#" className="text-amber-200 mr-4 hover:text-gray-400 text-2xl">Log in</a>
        </Link>
        <Link to="/Register">
          <a href="#" className="text-amber-200 mr-4 hover:text-gray-400 text-2xl">Register</a>
        </Link>
        <Link to="/Settings">
          <a href="#" className="text-amber-200 mr-4 hover:text-gray-400 text-2xl">Settings</a>
        </Link>
      </nav>
     <nav className="flex">
      <Link to="/AboutUs">
       <a href="#" className="text-amber-200 mr-4 hover:text-gray-400 text-2xl">About us</a>
      </Link>
      <Link to="/Contact">
       <a href="#" className="text-amber-200 hover:text-gray-400 text-2xl" >Contact</a>
      </Link>
     </nav>
    </header>
    <div className='text-amber-200 text-5xl text-center pt-20'>What are you looking for?</div>

    <div className='flex justify-center pt-10'>
      <Link to="/GymWorkout"> 
       <div>
        <img src='/images/gymworkout.png' className='mx-20 opacity-75'></img>
       </div>
      </Link>

      <Link to="/HomeWorkout">
       <div>
        <img src='/images/homeworkout.png' className='mx-20 opacity-75'></img>
       </div>
      </Link>
    </div>
    
    <button className=''>SAVED WORKOUTS</button>




  </div>
  )
};

export default FitnessGuide;