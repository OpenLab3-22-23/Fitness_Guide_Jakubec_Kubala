import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles


function Legpress() {


  return (
  
    <div className="h-screen w-screen bg-[url('/images/background.png')]">
      <div className="h-16 w-full ">
        <header className='bg-black p-10 flex items-center justify-center h-full'>
          <Link to="/FitnessGuide">
          <img src='/images/Logo.png' className='mr-10'></img>
          </Link>
          <h1 className="text-amber-200 font-semibold text-5xl">LEGPRESS</h1>
        </header>

        <div className='text-white flex justify-center font-semibold text-6xl pt-20'>How to do a Cable flyes?</div>
        <div className='flex justify-center bg-black mx-40 text-white font-semibold text-2xl opacity-80 mt-10'>Brace your abdominal muscles and push the platform
          away with your heels and forefoot. Your heels should remain flat on the footplate. The front of your foot or toes should never be used exclusively to move
          the pad forward. While exhaling, extend your legs and keep your head and back flat against the seat pad. Extend with slow control rather than with an 
          explosive movement. Pause at the top of the movement. Do not lock out your knees, and ensure that they are not bowing out or in.
          While inhaling, return the footplate to the starting position by gradually bending the knees. Keep the feet and back flat throughout.
          If you have never done leg presses, start modestly with three sets of 10 leg presses. You can advance from there as you build strength.<br></br>
          BENEFITS:<br></br>
          You can emphasize different muscles by varying your foot position. It builds strength in these muscles, and you
          can use it to overcome imbalances, such as overly developed hamstrings, compared to quadriceps.
        </div>

     </div>
    </div> 
  )
}

export default Legpress;