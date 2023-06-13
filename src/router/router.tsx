import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../auth/Login";
import SignUp from "../auth/SignUp";
import GymWorkout from "../GymWorkout";
import HomeWorkout from "../HomeWorkout";
import AboutUs from "../AboutUs";
import Contact from "../Contact";
import Register from "../Register";
import Settings from "../Settings";
import Log from "../Log";
import FitnessGuide from "../FitnessGuide";
import SavedWorkouts from "../SavedWorkouts";
import Pushup from "../HomeWorkout/Pushup";
import Pullup from "../HomeWorkout/Pullup";
import Plank from "../HomeWorkout/Plank";
import Bridge from "../HomeWorkout/Bridge";
import Wallsquat from "../HomeWorkout/Wallsquat";
import Birddog from "../HomeWorkout/Birddog";
import Workout from "../Workout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/GymWorkout",
    element: <GymWorkout />,
  },
  {
    path: "/HomeWorkout",
    element: <HomeWorkout />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Log",
    element: <Log />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Settings",
    element: <Settings />
  },
  {
    path: "/FitnessGuide",
    element: <FitnessGuide />,
  },
  {
    path: "/SavedWorkouts",
    element: <SavedWorkouts />,
  },
  
  {
    path: "/Pushup",
    element: <Pushup />,
  },
  {
    path: "/Pullup",
    element: <Pullup />,
  },
  {
    path: "/Plank",
    element: <Plank />,
  },
  {
    path: "/Bridge",
    element: <Bridge />,
  },
  {
    path: "/Wallsquat",
    element: <Wallsquat />
  },
  {
    path: "/Birddog",
    element: <Birddog />
  },
  {
    path: "/Workout",
    element: <Workout />
  },
]);
