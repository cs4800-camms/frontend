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
                <div className={`card px-4 py-4 ${classes.card}`}  >
                    <div class="card-body">
                        <h5 className={`card-title mb-3 ${classes.title}`}>We are TrippyTravel</h5>
                        <br></br><br></br>
                        <Form className={classes.form}>
                            <p>Please create your account</p>
                            <br></br>
                            <div class="row mb-4">
                                <div class="col">
                                    <div className={`form-floating mb-4 ${classes.control}`}>
                                        <input type="text" id="floatingInput" class="form-control" placeholder="Enter first name" required />
                                        <label class="form-label" for="floatingInput">First name</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className={`form-floating mb-4 ${classes.control}`}>
                                        <input type="text" id="floatingInput" class="form-control" placeholder="Enter last name" required />
                                        <label class="form-label" for="floatingInput">Last name</label>
                                    </div>
                                </div>
                            </div>
                            <div className={`form-floating mb-4 ${classes.control}`}>
                                <input type="text" id="floatingInput" class="form-control" placeholder="Enter valid email" required />
                                <label class="form-label" for="floatingInput">Email</label>
                            </div>
                            <br></br>
                            <div className={`form-floating mb-4 ${classes.control}`}>
                                <input type="text" id="floatingInput" class="form-control" placeholder="Create a password" required />
                                <label class="form-label" for="floatingInput">Create password</label>
                            </div>
                            <br></br><br></br><br></br>


                            <div class="col-auto">
                                <button onClick={navigateToTrips} class="btn btn-primary btn-lg">Signup</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
