import React  from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '/Users/nishatourjob/Repo/frontend/my-app/src/components/Trippy_logo.png'



export default function LandingPage(){
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login");
    }
    const navigateToSignin = () => {
        navigate("/Signin");
    }
    return(
        <body>
            <br></br><br></br>
            <h1>Welcome to Trippy Travel</h1>
            <br></br>

            <div class="col-auto">
                <img style={{width:300, height:300}} src={Logo} alt="Trippy Logo" />
            </div>

            <br></br><br></br>

            <div class="col-auto">
                    <button onClick={navigateToLogin} class="btn btn-primary btn-lg">Log In</button>
            </div>
            <br></br>
            <div class="col-auto">
                    <button onClick={navigateToSignin} class="btn btn-primary btn-lg">Sign In</button>
            </div>
            

        </body>
    )
}