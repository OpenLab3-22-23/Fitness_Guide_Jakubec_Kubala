import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles

import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";

function GymWorkout() {

  
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
       <img src={CDNURL + "/" + "Logo.png"} className='mr-10 '></img>
       </Link>
      <h1 className="text-amber-200 font-semibold text-5xl">GYMWORKOUT</h1>
    </header>

    <div className="w-full max-w-sm">
     <form>
      <div className="flex items-center py-2">
       <input className="appearance-none bg-transparent border-none w-full text-amber-200 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search..."></input>
       <button className="bg-amber-200 hover:bg-amber-400  text-sm  text-black py-1 px-2 rounded" type="button">
        Search
       </button>
      </div>
     </form>
    </div>

    <div className='flex justify-center pt-10'>
      <Link to="/Benchpress"> 
       <div>
        <img src={CDNURL + "/" + "benchpress.jpeg"} className='mx-20 opacity-90'></img>
       </div>
      </Link>

      <Link to="/Bicepcurls">
       <div>
        <img src={CDNURL + "/" + "bicepcurls.jpeg"} className='mx-20 opacity-90'></img>
       </div>
      </Link>

      <Link to="/Cableflies">
       <div>
        <img src={CDNURL + "/" + "cableflies.jpeg"} className='mx-20 opacity-90'></img>
       </div>
      </Link>
    </div>
    <div className='flex justify-center pt-10'>

      <Link to="/Deadlift">
       <div>
        <img src={CDNURL + "/" + "deadlift.jpeg"} className='mx-20 opacity-90'></img>
       </div>
      </Link>
    
      <Link to="/Legpress">
       <div>
        <img src={CDNURL + "/" + "legpress.png"} className='mx-20 opacity-90'></img>
       </div>
      </Link>

      <Link to="/Shoulderseatedpress">
       <div>
        <img src={CDNURL + "/" + "shoulderseatedpress.jpeg"} className='mx-20 opacity-90'></img>
       </div>
      </Link>
    </div>
    


  </div>
 </div>
  )
};

export default GymWorkout;