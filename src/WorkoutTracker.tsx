import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import the Tailwind CSS styles


const FitnessGuide: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newWorkout: Workout = {
      name: formData.get('name') as string,
      sets: formData.get('sets') as number,
      reps: formData.get('reps') as number,
    };
    setWorkouts([...workouts, newWorkout]);
  };

  return (
  
  <div className="h-full w-full bg-[url('/images/background.png')]">
    <header className='bg-black p-10 flex items-center justify-between'>
      <h1 className="text-white font-medium">Header Title</h1>
     <nav className="flex">
      <a href="#" className="text-white mr-4 hover:text-gray-400">About us</a>
      <a href="#" className="text-white hover:text-gray-400">Contact</a>
     </nav>
    </header>
    <div className='text-white text-5xl text-center pt-20'>What are you looking for?</div>

    <div className='flex justify-center pt-10'>
      <Link to="/GymWorkout"> 
      <a href='GymWorkout.html'>
        <img src='/images/gymworkout.png' className='mx-20 opacity-75'></img>
      </a>
      </Link>

      <Link to="/HomeWorkout">
      <div>
        <img src='/images/homeworkout.png' className='mx-20 opacity-75'></img>
      </div>
      </Link>
    
    </div>
    
  </div>
  )
};

export default FitnessGuide;