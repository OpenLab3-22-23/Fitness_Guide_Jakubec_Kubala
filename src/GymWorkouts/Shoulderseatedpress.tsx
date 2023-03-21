import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";


function Shoulderseatedpress() {
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
          <h1 className="text-amber-200 font-semibold text-5xl">SHOULDER SEATED PRESS</h1>
        </header>

        <div className='text-white flex justify-center font-semibold text-6xl pt-20'>How to do a Seated Shoulder Press?</div>
        <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-10'>Sit in a shoulder-press bench and rack,
         and keep the back straight while gripping the bar with the hands a little wider than shoulder-width apart. Take the bar out of the rack and
         slowly lower to the front of the shoulders, stopping when the bar is about chin-height. Press the feet into the floor, squeeze the stomach 
         muscles, and keep the elbows pointed forward while pressing the bar directly overhead. Slowly lower the bar to chin-height and repeat for
         the desired number of repetitions.<br></br>
         BENEFITS:<br></br>
         Perfect for strength because you can push a lot of weight. Improve shoulder and thoraric spine mobility. Great for those with bad backs or
         recovering from injury. Corrects poor form.
        </div>



     </div>
    </div> 
  )
}

export default Shoulderseatedpress;