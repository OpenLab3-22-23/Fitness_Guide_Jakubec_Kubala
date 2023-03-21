import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";


const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";
// import the Tailwind CSS styles


function FitnessGuide() {


  const [ images, setImages ] = useState([]);
  const user = useUser();
  const supabase = useSupabaseClient();

  async function getImages() {
    const { data, error } = await supabase
      .storage
      .from('gym-workout-imgs')
      .list("/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc"}
      });   
  }

  return (
 <div className="h-screen w-screen bg-[length:1920px_1080px] bg-center bg-[url('https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/background.png')]">
  <div className="h-full w-full ">
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
        <img src={CDNURL + "/" + "gymworkout.png"}  className='mx-20 opacity-75'></img>
       </div>
      </Link>

      <Link to="/HomeWorkout">
       <div>
        <img src={CDNURL + "/" + "homeworkout.png"} className='mx-20 opacity-75'></img>
       </div>
      </Link>
    </div>
    
    <div className='flex justify-center pt-20'>
      <Link to="/SavedWorkouts">
      <button className="bg-amber-200 hover:bg-amber-400 text-black text-lg font-bold py-4 px-6 rounded">
       SAVED WORKOUTS
      </button>
      </Link>
    </div>




  </div>
 </div>
  )
};

export default FitnessGuide;