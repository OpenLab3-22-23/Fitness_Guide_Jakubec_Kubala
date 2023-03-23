import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";


function Deadlift() {
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
  
    <div className="min-h-screen w-screen bg-[length:1920px_1080px] bg-center bg-[url('https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/background.png')]">
      <div className="min-h-screen w-full ">
        <header className='bg-black p-10 flex items-center justify-center h-full'>
          <Link to="/FitnessGuide">
          <img src={CDNURL + "/" + "Logo.png"} className='mr-10'></img>
          </Link>
          <h1 className="text-amber-200 font-semibold text-5xl">DEADLIFT</h1>
        </header>

        <div className='text-white flex justify-center font-semibold text-6xl pt-20'>How to do a Deadlift?</div>
        <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-10'>Stand behind a barbell with your feet about shoulder-width apart.
          Sit your hips back, bend your knees slightly, and lean your torso forward, maintaining a tight core and flat back. Grab the bar, placing your hands shoulder-width apart,
          palms facing in toward your body.
          Push your feet into the floor and stand up tall, pulling the weight with you and keeping your arms straight. Bring your hips forward and squeeze your abs and glutes at 
          the top. Slowly reverse the movement, bending your knees and pushing your butt back to lower the weight back to the floor. Keep the bar close to your body the entire 
          time and maintain a flat back. This is 1 rep.<br></br>
          BENEFITS:<br></br>
          It is perfect if you’re interested in lifting heavy.Deadlift can help get you strong as hell, if that’s 
          a goal of yours. Deadlift can also be great option for people who don’t feel comfortable doing lunges or 
          squats (if knee pain arises during them).It seriously work your grip strength.
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

export default Deadlift;