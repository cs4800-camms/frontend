import "bootstrap/dist/css/bootstrap.min.css";
import classes from './AddTripForm.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import Form from 'react-bootstrap/Form';
import { useState } from "react";


export default function AddTripForm() {
    const [date, setDate] = useState(new Date());
    return (
        <body>
            <Form class="row gy-2 gx-3 align-items-center" className={classes.form}>
                <div class="col-auto">
                    <div class="input-group mb-3">
                        <span className={`input-group-text ${classes.input}`} id="basic-addon3">Trip name</span>
                        <input type="text" class="form-control form-control-lg" id="autoSizingInout" placeholder="e.g Trip #1" aria-describedby="basic-addon3" />
                    </div>
                </div>
                <div class="col-auto">
                    <div class="input-group mb-3">
                        <span className={`input-group-text ${classes.input}`} id="basic-addon3">Where to?</span>
                        <input type="text" class="form-control form-control-lg" id="autoSizingInout" placeholder="e.g Paris, France" aria-describedby="basic-addon3" />
                    </div>
                </div>
                <div class="col-auto">
                    <div class="input-group mb-3" id="datepicker">
                    <input type="date" class="form-control form-control-lg" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                </div>
                <div class="col-auto">
                    <div class="input-group mb-3" id="datepicker">
                        <input type="date" class="form-control form-control-lg" value="End date" />
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