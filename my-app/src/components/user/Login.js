import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../trips/add/AddTripForm.module.css"
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const navigateToTrips = () => {
        navigate("/all-trips");
    }
    return (
        <>
            <div class="container mt-4 mb-4 d-flex justify-content-center">
                <div className={`card px-5 py-5 ${classes.card}`} >
                    <div class="card-body">
                        <h5 className={`card-title mb-3 ${classes.title}`}>We are TrippyTravel</h5>
                        <br></br><br></br>
                        <Form className={classes.form}>
                            <p>Please login to your account</p>
                            <div className={`form-floating mb-4 ${classes.control}`}>
                                <input type="text" id="floatingInput" class="form-control" placeholder="e.g My trip #1" required />
                                <label class="form-label" for="floatingInput">Email</label>
                            </div>

                            <div className={`form-floating mb-4 ${classes.control}`}>
                                <input type="text" id="floatingInput" class="form-control" placeholder="Enter password" required />
                                <label class="form-label" for="floatingInput">Password</label>
                            </div>
                            <div class="col-auto">
                                <button onClick={navigateToTrips}class="btn btn-primary btn-lg">Login</button>

                            </div>
                            <br></br><br></br>
                            <p> Don't have an account? <a class href="/signup">Create one here </a></p>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
