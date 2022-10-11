import "bootstrap/dist/css/bootstrap.min.css";
import classes from './AddTripForm.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Form from 'react-bootstrap/Form';
import { useState } from "react";

export default function AddTripForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <body>
            <Form class="row gy-2 gx-3 align-items-center " className={classes.form}>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="e.g My trip #1" />
                    <label className={classes.label} for="floatingInput">Trip name</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="e.g Paris, France" />
                    <label className={classes.label} for="floatingInput">Where to?</label>
                </div>

                <div class="col-auto">
                    <div class="input-group mb-3" id="datepicker">
                        <input type="date" class="form-control form-control-lg" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                </div>
                <div class="col-auto">
                    <div class="input-group mb-3" id="datepicker">
                        <input type="date" class="form-control form-control-lg" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary btn-lg">Start Planning</button>
                </div>
            </Form>

        </body>
    );

}