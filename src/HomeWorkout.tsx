import React, { useState } from 'react';
// import the Tailwind CSS styles


const HomeWorkout: React.FC = () => {
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
      <h1 className="text-white font-medium">UADNAUSDNASDnaSIPD</h1>
     <nav className="flex">
      <a href="#" className="text-white mr-4 hover:text-gray-400">About us</a>
      <a href="#" className="text-white hover:text-gray-400">Contact</a>
     </nav>
    </header>
    <div className='text-white text-5xl text-center pt-20'>What are you looking for?</div>


    
  </div>
  )
};

export default HomeWorkout;