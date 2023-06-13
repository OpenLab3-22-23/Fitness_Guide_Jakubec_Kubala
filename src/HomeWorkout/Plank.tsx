import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";

function Plank() {
  const [ images, setImages ] = useState([]);
  const user = useUser();
  const supabase = useSupabaseClient();

  async function getImages() {
    const { data, error } = await supabase
      .storage
      .from('images')
      .list("/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc"}
      });   
  }

  return (
  
    <div className="min-h-screen w-screen bg-[length:1920px_1080px] bg-center bg-[url('https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/background.png')]">
      <div className="min-h-screen w-full ">
        <header className='bg-black p-10 flex items-center justify-center h-full'>
          <Link to="/FitnessGuide">
          <img src={CDNURL + "/" + "Logo.png"} className='mr-10'></img>
          </Link>
          <h1 className="text-amber-200 font-semibold text-5xl">PLANK</h1>
        </header>
      
      <div className='text-white flex justify-center font-semibold text-6xl pt-20'>How to do a plank?</div>
      <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-10 text-center'>
        Assume a plank position on your forearms. Your body should form a straight line from head to feet.
        Ensure your lower back and hips don’t sag. Hold the position for 30 seconds to 1 minute.<br></br>
        BENEFITS:<br></br>
        It is  full-body exercise that requires strength and balance, planks put the core into overdrive.
      </div>

      <div className='flex justify-center pt-20'>
        <button className="bg-amber-200 hover:bg-amber-400 text-black text-lg font-bold py-4 px-6 rounded">
        SAVE WORKOUT
        </button>
      </div>
        
     </div>
    </div> 
  )
}

export default Plank;