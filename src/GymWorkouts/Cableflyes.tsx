import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";


function Cableflyes() {
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
  
    <div className="h-screen w-screen bg-[length:1920px_1080px] bg-center bg-[url('https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/background.png')]">
      <div className="h-16 w-full ">
        <header className='bg-black p-10 flex items-center justify-center h-full'>
          <Link to="/FitnessGuide">
          <img src={CDNURL + "/" + "Logo.png"} className='mr-10'></img>
          </Link>
          <h1 className="text-amber-200 font-semibold text-5xl">CABLE FLYES</h1>
        </header>

        <div className='text-white flex justify-center font-semibold text-6xl pt-20'>How to do a Cable flyes?</div>
        <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-10'>Set the pulleys on a dual-cable 
          machine to chest height, and stand between the two stacks. Grab the handles. Keeping your back straight and core engaged, raise your
          arms out to your sides, palms facing forward, and walk a step or two forward in order to create tension on the cables. Stand with
          one foot in front of the other.Bend your elbows slightly, making sure not to let them travel behind your shoulders. This is your 
          starting position. Pull your hands toward each other in wide arcs in front of you, pausing when your hands touch before slowly returning
          to the starting position. Alternate your forward foot with each set.<br></br>
          BENEFITS:<br></br>
          With proper shoulder-blade stability, the cable chest fly changes the angle of the movement enough to limit the potential stress on the 
          joints.Cable chest flys also place lots of tension on the muscle through its entire range of motion. That’s not something that can be said
          of bench-press variations (in which your bones support the weight when your arms are vertical), or dumbbell flys (in which there’s a lot
          of tension on the muscles when your arms are spread wide, but almost none once your arms are vertical). The cable setup gives your muscles
          almost uninterrupted time under tension, and a huge pump — each of which which can help optimize muscle growth.
        </div>
        
     </div>
    </div> 
  )
}

export default Cableflyes;