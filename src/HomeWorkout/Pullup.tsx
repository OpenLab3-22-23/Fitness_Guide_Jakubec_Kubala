import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";

function Pullup() {
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
          <h1 className="text-amber-200 font-semibold text-5xl">PULL UP</h1>
        </header>
      
      <div className='text-white flex justify-center font-semibold text-6xl pt-20'>How to do a pull up?</div>
      <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-10'>
        Start by standing directly below a pull-up bar. Place your hands in an overhand grip (palms facing away from your body)
        with your hands slightly further than shoulder-width apart. If you can’t reach the bar from standing on the floor, you 
        can place a box beneath you and stand on that. Once your hands are holding onto the bar, you’re in your starting position.
        Inhale, then exhale. Lift your feet up from the floor or box so that you’re hanging from the bar, and engage your core by 
        pulling your belly button in toward your spine. Pull your shoulders back and down. Engaging the muscles in your arms and 
        back, bend your elbows and raise your upper body up toward the bar until your chin is over the bar. You can imagine bringing
        your elbows toward your hips if that makes the movement easier. As you move, avoid swinging your legs around or shrugging your 
        shoulders up. You want to make sure your shoulder blades remain back and down throughout the exercise.
        At the top of the movement, inhale. Then extend your elbows and lower your body back down to the starting position.<br></br>
        BENEFITS:<br></br>
        Because pull-ups utilise many muscles in one movement, they are known as a compound exercise. Compound exercises 
        mimic natural movement and help improve coordination, reaction time and balance. They also train the nervous system
        and muscle tissue at the same time (as opposed to isolation exercises).
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

export default Pullup;