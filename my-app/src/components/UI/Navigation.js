import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Navigation.module.css";
import { useNavigate } from 'react-router-dom';


export default function ItineraryItem() {
  const navigate = useNavigate();

    const navigateToTrips = () => {
        navigate("/login");
    }

    const navigateToTrips2 = () => {
      navigate("/signup");
  }

  const navigateToTrips3 = () => {
    navigate("/all-trips");
}


    return (
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a className={`navbar-brand ${classes.title}`} onClick ={navigateToTrips3} href="#">Trippy Travel</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-iteem">
                <button class="btn btn-dark" onClick ={navigateToTrips2} type="signup">Sign In</button>
                </li>
                <li class ="nav-item">
                  <span></span>
                </li>
                <li class="nav-item">
                <button class="btn btn-dark" onClick={navigateToTrips} type="login">Log In</button>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
    )
}

