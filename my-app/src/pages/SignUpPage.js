import React  from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
export default function SignUpPage(){
    const navigate = useNavigate();

    const navigateToTrips = () => {
        navigate("/all-trips");
    }
    return(
        <body>
            <br></br><br></br>
            <h1>Sign Up</h1>
            <br></br><br></br>
            <form class="row gy-2 gx-3 align-items-center " >
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Name"/>
                    <label for="floatingInput">Name</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Last name"/>
                    <label for="floatingInput">Last name</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Email"/>
                    <label for="floatingInput">Email</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingInput" placeholder="Password"/>
                    <label for="floatingInput">Password</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingInput" placeholder="Re-Password"/>
                    <label for="floatingInput">Re-Password</label>
                </div>

                <br></br>
                <div class="col-auto">
                    <button onClick={navigateToTrips} class="btn btn-primary btn-lg">Enter</button>
                </div>
            </form>
        </body>
    )
}
