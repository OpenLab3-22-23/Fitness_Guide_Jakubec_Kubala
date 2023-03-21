import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";


function Bicepcurls() {
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
      <div className="h-16 w-full ">
        <header className='bg-black p-10 flex items-center justify-center h-full'>
          <Link to="/FitnessGuide">
          <img src={CDNURL + "/" + "Logo.png"} className='mr-10'></img>
          </Link>
          <h1 className="text-amber-200 font-semibold text-5xl">BICEP CURLS</h1>
        </header>

        <div className='text-white flex justify-center font-semibold text-6xl pt-20'>How to do a Bicep curls?</div>
        <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-10'>Hold the barbell
         with both hands facing up so the wrists, elbows, and shoulders are in a straight line about shoulder-width apart. Lift 
         the barbell toward the shoulders while bending the elbows and keeping them next to the middle of the body. Slowly lower
         the weight to return to the starting position. Keep chest still, using just the arms for the movement.<br></br>
         BENEFITS:<br></br>
         Bicep curls are good for hypertrophy, or growth in muscle size, of the bicep. So if you're looking to make everyday 
         activities easier while toning your arms, bicep curls can definitely help. Building a strong bicep muscle also adds 
         to the appearance of strength in the upper body.
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

export default Bicepcurls;