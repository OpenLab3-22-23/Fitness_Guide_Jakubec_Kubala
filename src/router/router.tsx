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
  }

]);
