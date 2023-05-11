import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import FitnessGuide from "./FitnessGuide";
import React, { useState } from 'react';
import SearchBar from "./SearchBar.jsx/SearchBar";

export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
        
    }

    return (
        <FitnessGuide />
    )
}