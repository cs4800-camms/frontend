import React  from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/user/Login';
export default function LogIn(){
    const navigate = useNavigate();

    const navigateToTrips = () => {
        navigate("/all-trips");
    }
    
    return(
        <body>
            <br></br><br></br>
            <h1>Log In</h1>
            <br></br><br></br>
            <Login></Login>
        </body>
    )
}
