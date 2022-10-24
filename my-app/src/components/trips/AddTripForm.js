import "bootstrap/dist/css/bootstrap.min.css";
import classes from './AddTripForm.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from 'axios';

export default function AddTripForm(props) {

    const [tripInfo, setTripInfo] = useState({
        userId: 1,
        tripName: "",
        tripDestination: "",
        startDate: new Date(),
        endDate: new Date(),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTrip(tripInfo);

        axios.post(`/trips/create`, tripInfo)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <body>
            <Form class="row gy-2 gx-3 align-items-center " className={classes.form} onSubmit={handleSubmit}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="e.g My trip #1" onChange={(e) => setTripInfo({ ...tripInfo, tripName: e.target.value })} value={tripInfo.tripName} required />
                    <label className={classes.label} for="floatingInput">Trip name</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="e.g Paris, France" onChange={(e) => setTripInfo({ ...tripInfo, tripDestination: e.target.value })} value={tripInfo.tripDestination} required />
                    <label className={classes.label} for="floatingInput">Where to?</label>
                </div>

                <div class="col-auto">
                    <div class="form-floating mb-3" id="datepicker">
                        <input type="date" class="form-control form-control-lg" onChange={(e) => setTripInfo({ ...tripInfo, startDate: e.target.value })} value={tripInfo.startDate} required />
                        <label htmlFor="startDate" className={classes.label} for="floatingInput">Start Date</label>
                    </div>
                </div>

                <div class="col-auto">
                    <div class="form-floating mb-3" id="datepicker">
                        <input type="date" min={tripInfo.startDate} class="form-control form-control-lg" onChange={(e) => setTripInfo({ ...tripInfo, endDate: e.target.value })} value={tripInfo.endDate} required />
                        <label htmlFor="startDate" className={classes.label} for="floatingInput">End Date</label>
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