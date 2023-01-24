import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import WorkoutTracker from './WorkoutTracker';

export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
        
    }

    return (
        <WorkoutTracker />
    )
}