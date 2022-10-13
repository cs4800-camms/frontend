import "bootstrap/dist/css/bootstrap.min.css";
import classes from './AddTripForm.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

export default function AddTripForm() {

    const [tripInfo, setTripInfo] = useState({
        tripName: "",
        tripLocation: "",
        startDate: new Date(),
        endDate: new Date(),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tripInfo)
        //setTripInfo({tripName: "", tripLocation: "", startDate: new Date(), endDate: new Date()})
    };

    return (
        <body>
            <Form class="row gy-2 gx-3 align-items-center " className={classes.form} onSubmit={handleSubmit}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="e.g My trip #1" onChange={(e) => setTripInfo({ ...tripInfo, tripName: e.target.value })} value={tripInfo.tripName} />
                    <label className={classes.label} for="floatingInput">Trip name</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="e.g Paris, France" onChange={(e) => setTripInfo({ ...tripInfo, tripLocation: e.target.value })} value={tripInfo.tripLocation} />
                    <label className={classes.label} for="floatingInput">Where to?</label>
                </div>

                <div class="col-auto">
                    <div class="form-floating mb-3" id="datepicker">
                        <input type="date" class="form-control form-control-lg" onChange={(e) => setTripInfo({ ...tripInfo, startDate: e.target.value })} value={tripInfo.startDate} />
                        <label className={classes.label} for="floatingInput">Start Date</label>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="form-floating mb-3" id="datepicker">
                        <input type="date" class="form-control form-control-lg" onChange={(e) => setTripInfo({ ...tripInfo, endDate: e.target.value })} value={tripInfo.endDate} />
                        <label className={classes.label} for="floatingInput">End Date</label>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
                <div class="col-auto">
                    <button class="btn btn-primary btn-lg">Start Planning</button>
                </div>
            </Form>

        </body>
    );

}