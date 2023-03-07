import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const CDNURL = "https://rddeioodoqyucqroampy.supabase.co/storage/v1/object/public/gym-workout-imgs/";



function Log() {
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
          <h1 className="text-amber-200 font-semibold text-5xl">LOGIN</h1>
        </header>

  <div className="w-full max-w-xs mx-auto">
   <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 opacity-95">
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" >
        Email:
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email"></input>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" >
        Password:
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                       focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"></input>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-amber-200 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded 
                         focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-amber-200 hover:text-amber-400" href="#">
        Forgot Password?
      </a>
    </div>
   </form>
  </div>
   <div className='h-full flex items-center justify-center '>
    <a className='pt-50 text-white h-full font-semibold text-3xl'>Don´t have account?</a>
   </div>
   <div className='h-full flex items-center justify-center'>
     <Link to="/Register">
     <button className="text-amber-200 hover:bg-neutral-700 bg-neutral-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Register now!
     </button>
     </Link>
   </div>





  </div>
</div> 
  )
};

export default Log;