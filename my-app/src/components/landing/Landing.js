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
            <div className={`container ${classes.titlecard}`}>
            <div class="row align-items-center">
            <div class="col-auto align-center">
            <br></br>
            <br></br>
            <br></br>
                <h1 className={classes.title}>Welcome to</h1>
                <h1 className={classes.bigtitle}>Trippy Travel</h1>
                <br></br>
                <h1 className={classes.subtitle}>Create your dream itinerary<br></br>to travel without the hassel!</h1>
                <br></br>
                <div class="container">
                    <div class="row">
                        <div class="col">
                        </div>
                        <div class="col">
                            <button onClick={navigateToLogin} className={`btn btn-primary btn-lg ${classes.button}`} type="button">Login</button>
                        </div>
                        <div class="col">
                            <button onClick={navigateToSignup} class={`btn btn-primary btn-lg ${classes.button}`} type="button">Signup</button>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                    <img src={Logo} style={{width: "400px"}} alt="Trippy Logo" />
            </div>
            </div>
            </div>
    );
}