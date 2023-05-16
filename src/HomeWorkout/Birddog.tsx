import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";

function Birddog() {
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
          <h1 className="text-amber-200 font-semibold text-5xl">BRIDGE</h1>
        </header>
      
      <div className='text-white flex justify-center font-semibold text-6xl pt-20'>How to do a bridge?</div>
      <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-10'>
            Get on all fours, ensuring your hands are directly underneath your shoulders and your knees are underneath your hips.
            Keeping your neck neutral, simultaneously extend your left arm and right leg, keeping your hips square to the ground. Pause here for 2 seconds.
            Return to the start position. Repeat with your right arm and left leg.<br></br>
            BENEFITS:<br></br>
            A full-body move that requires balance and stability, the Bird Dog pose is easily scalable to your
            ability level. Start with this version if you’re a beginner.
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

export default Birddog;
