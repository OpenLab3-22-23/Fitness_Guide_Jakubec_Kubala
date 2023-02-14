import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles


function Contact() {


  return (
  
    <div className="h-screen w-screen bg-[url('/images/background.png')]">
      <div className="h-16 w-full ">
        <header className='bg-black p-10 flex items-center justify-center h-full'>
          <h1 className="text-amber-200 font-semibold text-5xl">CONTACT</h1>
        </header>
        <div className='text-2xl text-center pt-20 text-white'>
         Matej-Email: Nepoviem@gmail.com
        </div>
        <div className='text-2xl text-center pt-20 text-white'>
         Samuel-Email: Neviem@gmail.com
        </div>
     </div>
    </div> 
  )
};

export default Contact;