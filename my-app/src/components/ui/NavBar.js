import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./NavBar.module.css";
import Logo from "./NavLogo.png"
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

    const navigateToTrips = () => {
        navigate("/landing");
    }
    return (
        <nav className={`navbar navbar-expand-lg bg-light ${classes.nav}`}>
        <div class="container">
          <img id ="logo-img" style={{width: "200px"}} className={`navbar-brand ${classes.logo}`} src={Logo} alt="..."/>
          
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <button class="btn btn-primary btn-m" onClick={navigateToTrips} type="Log out"><i class="bi bi-box-arrow-right"></i>  Log out</button>
                </li>
              </ul>
        </div>
      </nav>
    );
}