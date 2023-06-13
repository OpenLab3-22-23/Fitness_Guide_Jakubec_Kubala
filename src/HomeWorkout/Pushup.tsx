import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";

function Pushup() {
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
          <h1 className="text-amber-200 font-semibold text-5xl">PUSH UP</h1>
        </header>
      
      <div className='text-white flex justify-center font-semibold text-6xl pt-20'>How to do a push up?</div>
      <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-10 text-center'>
       Contract your abs and tighten your core by pulling your belly button toward your spine. 
       Inhale as you slowly bend your elbows and lower yourself to the floor, until your elbows are at a 90-degree angle.
       Exhale while contracting your chest muscles and pushing back up through your hands, returning to the start position.<br></br>
       BENEFITS:<br></br>
       The upper body muscles that come into play in the push-up are the deltoids of the shoulders, the pectoral muscles of 
       the chest, the triceps and biceps of the upper arm, and the gluteal or hip muscles, and the erector spinae of the back.
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

export default Pushup;