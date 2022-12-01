import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./NavBar.module.css";
import Logo from "./NavLogo.png"
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';

export default function NavBar() {
    const navigate = useNavigate();

    const logout = () => {
        AuthService.logout();
        navigate("/landing");
    }

    const navigateToHome = () => {
        navigate("/all-trips");
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-light ${classes.nav}`}>
            <div class="container">
                <img style={{width: "200px"}} className={`navbar-brand ${classes.logo}`} onClick={navigateToHome} src={Logo} alt="..."/>
                <button class="btn btn-primary btn-m" onClick={logout} type="Log out">Log out</button>
            </div>
        </nav>
    );
}