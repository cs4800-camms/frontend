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
          <img style={{width: "200px"}}className={`navbar-brand ${classes.logo}`} src={Logo} alt="..."/>
          <button class="btn btn-primary btn-m" onClick={navigateToTrips} type="Log out">Log out</button>
        </div>
      </nav>
    );
}