import React  from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from '../components/user/Signup';
export default function SignUpPage(){
    const navigate = useNavigate();

    const navigateToTrips = () => {
        navigate("/all-trips");
    }
    return(
        <body>
            <br></br><br></br>
            <h1>Sign Up</h1>
            <br></br><br></br>
           <Signup></Signup>
        </body>
    )
}
