import { BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./auth/Auth";
import LandingPage from "./LandingPage";
import React, { useState } from 'react';

function App() {

  const { session } = useAuth();

  return (
    <div className="w-screen h-screen">
        {session ? (
          <LandingPage />

        ) : <Navigate to="/signup" />}

      </div>
  );
}

export default App;
