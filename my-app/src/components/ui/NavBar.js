import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./NavBar.module.css";
import Logo from "./NavLogo.svg"

export default function NavBar() {
    return (
        <nav className={`navbar navbar-expand-lg bg-light ${classes.nav}`}>
        <div class="container-fluid">
          <img className={`navbar-brand ${classes.logo}`} src={Logo} alt="..."/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
         
        </div>
      </nav>
    );
}