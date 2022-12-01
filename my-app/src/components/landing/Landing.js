import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from './LandingLogo2.svg';
import classes from "./Landing.module.css";
export default function Landing() {

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login");
    }
    const navigateToSignup = () => {
        navigate("/signup");
    }
    return (
        <body>
            <h1 className={classes.title}>Welcome to TrippyTravel</h1>
            <br></br>
            <div class="col-auto">
                <img src={Logo} alt="Trippy Logo" />
            </div>

 

            <div class="d-grid gap-4 col-1 mx-auto">
                <button onClick={navigateToLogin} className={`btn btn-primary btn-lg ${classes.button}`} type="button">Login</button>
                <button onClick={navigateToSignup} class="btn btn-primary btn-lg" type="button">Signup</button>
            </div>

        </body>
    );
}