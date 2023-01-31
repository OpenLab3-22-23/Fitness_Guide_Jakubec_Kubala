import React, { useState } from 'react';
// import the Tailwind CSS styles

interface Workout {
  name: string;
  sets: number;
  reps: number;
}

const WorkoutTracker: React.FC = () => {
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
    <div className="bg-[#000000]">
      <h1 className="text-2xl font-medium m-4 text-center text-white">Fitness Guide</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md">
        <label htmlFor="name" className="block font-medium text-sm">
          Workout Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border rounded-md p-2"
        />
        <br />
        <label htmlFor="sets" className="block font-medium text-sm">
          Sets:
        </label>
        <input
          type="number"
          id="sets"
          name="sets"
          required
          className="border rounded-md p-2"
        />
        <br />
        <label htmlFor="reps" className="block font-medium text-sm">
          Reps:
        </label>
        <input
          type="number"
          id="reps"
          name="reps"
          required
          className="border rounded-md p-2"
        />
        <br />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Workout
        </button>
      </form>
      <h2 className="text-lg font-medium m-4">Workouts</h2>
      <ul className="text-gray-800">
        {workouts.map((workout, index) => (
          <li key={index} className="p-2">
            {workout.name} - {workout.sets} sets of {workout.reps} reps
          </li>
        ))}
      </ul>
      <img src="/images/ronnie.gif" className=""></img>
    </div>
  );
};

export default WorkoutTracker;