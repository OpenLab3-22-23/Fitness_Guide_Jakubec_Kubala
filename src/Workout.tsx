import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
// import the Tailwind CSS styles
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";


function Workout() {
  const location = useLocation();
  const workout = location.state;

  return (
  
    <div className="min-h-screen w-screen bg-[length:1920px_1080px] bg-center bg-[url('https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/background.png')]">
      {workout && (
      <div className="min-h-screen w-full ">
        <header className='bg-black p-10 flex items-center justify-center h-full'>
          <Link to="/FitnessGuide">
          <img src={CDNURL + "/" + "Logo.png"} className='mr-10'></img>
          </Link>
          <h1 className="text-amber-200 font-semibold text-5xl">{workout.title}</h1>
        </header>

        <div className='text-white flex justify-center font-semibold text-6xl pt-20'>How to do a {workout.title}?</div>
        <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-10 text-center'>{workout.description} </div>
        <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-5 text-center'>{workout.benefits} </div>
        <div className='flex justify-center pt-20'>
          <button className="bg-amber-200 hover:bg-amber-400 text-black text-lg font-bold py-4 px-6 rounded">
          SAVE WORKOUT
          </button>
        </div>
        
     </div>
     )}
    </div> 
  )
}

export default Workout;