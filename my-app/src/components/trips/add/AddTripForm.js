import "bootstrap/dist/css/bootstrap.min.css";
import classes from './AddTripForm.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import { useState, useContext } from "react";
import GlobalContext from '../../../context/global';
import axios from 'axios';

export default function AddTripForm({ onAddTrip }) {
    const [tripInfo, setTripInfo] = useState({
        userId: 1,
        name: "",
        destination: "",
        startDate: new Date(),
        endDate: new Date(),
    });

    const { setTripList } = useContext(GlobalContext);

    const addTrip = (newTrip) => {
        setTripList((oldTrips) => [newTrip, ...oldTrips]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`/trips/create`, tripInfo)
            .then(function (response) {
                console.log(response);
                addTrip(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        onAddTrip(tripInfo); //navigates to home page
    };

    return (
        <>
            <div class="container mt-4 mb-4 d-flex justify-content-center">
                <div className={`card px-4 py-4 ${classes.card}`}>
                    <div class="card-body">
                        <h5 className={`card-title mb-3 ${classes.title}`}>Plan a New Trip</h5>
                        <br></br>
                        <Form className={classes.form} onSubmit={handleSubmit}>
                            <div className={`form-floating mb-4 ${classes.control}`}>
                                <input type="text" id="floatingInput" class="form-control" placeholder="e.g My trip #1" onChange={(e) => setTripInfo({ ...tripInfo, name: e.target.value })} value={tripInfo.name} required />
                                <label class="form-label" for="floatingInput">Trip name</label>
                            </div>

                            <div className={`form-floating mb-4 ${classes.control}`}>
                                <input type="text" id="floatingInput" class="form-control" placeholder="e.g Paris, France" onChange={(e) => setTripInfo({ ...tripInfo, destination: e.target.value })} value={tripInfo.destination} required />
                                <label class="form-label" for="floatingInput">Where to?</label>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <div className={`form-floating mb-4 ${classes.control}`}>
                                        <input type="date" max={tripInfo.endDate} id="floatingInput" class="form-control" onChange={(e) => setTripInfo({ ...tripInfo, startDate: e.target.value })} value={tripInfo.startDate} required />
                                        <label htmlFor="startDate" for="floatingInput">Start date</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className={`form-floating mb-4 ${classes.control}`}>
                                        <input type="date" min={tripInfo.startDate} id="floatingInput" class="form-control" onChange={(e) => setTripInfo({ ...tripInfo, endDate: e.target.value })} value={tripInfo.endDate} required />
                                        <label htmlFor="startDate" class="form-label" for="floatingInput">End date</label>
                                    </div>
                                </div>
                            </div>
                            <br></br><br></br><br></br><br></br>
                            <div class="col-auto">
                                <button class="btn btn-primary btn-lg">Start Planning</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}