import React, { Fragment, useState } from 'react';
import TripList from '../components/trips/TripList';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css'
import { useNavigate } from 'react-router-dom';

function AllTripsPage() {

    const navigate = useNavigate();

    const navigateToAdd = () => {
        navigate("/add-trip");
    }

    const DUMMY_DATA = [
        {
            id: 't1',
            title: 'My trip #1',
            image: "/paris.png",
            location: "Paris, France",
            startdate: "10/20/2022",
            enddate: "10/25/2022",

        },

        {
            id: 't2',
            title: 'My trip #2',
            image: "/rome.png",
            location: "Rome, Italy",
            startdate: "12/25/2022",
            enddate: "01/10/2023",

        },
        {
            id: 't3',
            title: 'My trip #3',
            image: "/paris.png",
            location: "Paris, France",
            startdate: "01/20/2023",
            enddate: "01/28/2023",
        }
    ];
    const [tripList, setTripList]= useState(DUMMY_DATA);
    return (
        <Fragment>
            <body>
                <div class="text-center">
                    <h1>Trippy Travel</h1>
                </div>
                <br></br>
                <br></br>
                <TripList trips={tripList}></TripList>
                <br></br><br></br><br></br>

                <div class="text-center">
                    <button onClick={navigateToAdd} type="button" class="btn btn-primary btn-lg" onclick="location.href = 'add.html'">Plan new trip</button>
                </div>
            </body>
        </Fragment>
    );

}
export default AllTripsPage;