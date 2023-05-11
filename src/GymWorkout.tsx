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
      .from('gym-workout-imgs')
      .list("/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc"}
      });   
  }
  


  return  (
    
    <div className="min-h-screen w-screen bg-[length:1920px_1080px] bg-center bg-[url('https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/background.png')]">
    <div className="min-h-screen w-full ">
    <header className='bg-black p-10 flex items-center justify-center h-full'>
       <Link to="/FitnessGuide">
       <img src={CDNURL + "/" + "Logo.png"} className='mr-10 '></img>
       </Link>
      <h1 className="text-amber-200 font-semibold text-5xl">GYMWORKOUT</h1>
    </header>

    {/* <div className="w-full max-w-sm">
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
      </form>
    </div> */}

    <div className="w-full max-w-sm">
    <form>
      <div className="flex items-center py-2">
        <form className="flex" id="search-form">
          <input className="bg-black border-2 text-white border-amber-200 rounded-l-md py-2 px-4 w-full" type="text" placeholder="Search"></input>
          <button className="bg-amber-200 hover:bg-amber-400 text-black text-lg font-bold rounded-r-md py-2 px-4">
            Search
          </button>
       </form>
      </div>
     </form>
    </div>

    <div className='flex justify-center pt-10'>
      <Link to="/Benchpress"> 
       <div className='relative'>
        <img src={CDNURL + "/" + "benchpress.jpeg"} className='mx-20 opacity-90'></img>
        <p className="absolute top-0 left-0 text-amber-200 font-bold text-2xl text-center w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">BENCHPRESS</p>
       </div>
      </Link>

      <Link to="/Bicepcurls">
       <div className='relative'>
        <img src={CDNURL + "/" + "bicepcurls.jpeg"} className='mx-20 opacity-90'></img>
        <p className="absolute top-0 left-0 text-amber-200 font-bold text-2xl text-center w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">BICEP CURLS</p>
       </div>
      </Link>

      <Link to="/Cableflies">
       <div className='relative'> 
        <img src={CDNURL + "/" + "cableflies.jpeg"} className='mx-20 opacity-90'></img>
        <p className="absolute top-0 left-0 text-amber-200 font-bold text-2xl text-center w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">CABLE FLIES</p>
       </div>
      </Link>
    </div>
    <div className='flex justify-center pt-10'>

      <Link to="/Deadlift">
       <div className='relative'>
        <img src={CDNURL + "/" + "deadlift.jpeg"} className='mx-20 opacity-90'></img>
        <p className="absolute top-0 left-0 text-amber-200 font-bold text-2xl text-center w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">DEADLIFT</p>
       </div>
      </Link>
    
      <Link to="/Legpress">
       <div className='relative '>
        <img src={CDNURL + "/" + "legpress.png"} className='mx-20 opacity-90'></img>
        <p className="absolute top-0 left-0 text-amber-200 font-bold text-2xl text-center w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">LEGPRESS</p>
       </div>
      </Link>

      <Link to="/Shoulderseatedpress">
       <div className='relative'>
        <img src={CDNURL + "/" + "shoulderseatedpress.jpeg"} className='mx-20 opacity-90'></img>
        <p className="absolute top-0 left-0 text-amber-200 font-bold text-2xl text-center w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">SHOULDER SEATED PRESS</p>
       </div>
      </Link>
    </div>
    


  </div>
 </div>
  )
};

export default GymWorkout;