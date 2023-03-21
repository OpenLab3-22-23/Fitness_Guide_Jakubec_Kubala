import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";


function Benchpress() {
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
          <h1 className="text-amber-200 font-semibold text-5xl">BENCH PRESS</h1>
        </header>

        <div className='text-white flex justify-center font-semibold text-6xl pt-20'>How to do a bench press?</div>
        <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-10'>Lie on your back on a flat bench. Grip a barbell with 
        hands slightly wider than shoulder width.
        The bar should be directly over the shoulders.<br></br>
        Press your feet firmly into the ground and keep your hips on the bench throughout the entire movement.<br></br>
        Keep your core engaged and maintain a neutral spine position throughout the movement. Avoid arching your back.<br></br>
        Slowly lift the bar or dumbbells off the rack, if using. Lower the bar to the chest, about nipple level, allowing elbows to bend out to the side, about    
        45 degrees away from the body.<br></br>
        Stop lowering when your elbows are just below the bench. Press feet into the floor as you push the bar back up to return to starting position.<br></br>
        Perform 5 to 10 reps, depending on weight used. Perform up to 3 sets.<br></br>
        BENEFITS:<br></br>
        The barbell bench press is often performed as a means to assess as well as enhance upper body strength, power, and endurance for athletic, occupational,
        and functional performance as well as muscle development.
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

export default Benchpress;