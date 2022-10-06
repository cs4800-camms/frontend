import React, { Fragment } from 'react';
import TripList from '../components/trips/TripList';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css'


function AllTripsPage() {
    const DUMMY_DATA = [
        {
            id: 't1',
            title: 'My trip #1',
            image: "/paris.png",
            location: "Paris, France",
            startdate: "2022-10-20",
            enddate: "2022-10-25",

        },

        {
            id: 't2',
            title: 'My trip #2',
            image: "/rome.png",
            location: "Rome, Italy",
            startdate: "2022-12-25",
            enddate: "2023-01-10",

        },
        {
            id: 't3',
            title: 'My trip #3',
            image: "/paris.png",
            location: "Paris, France",
            startdate: "2023-01-20",
            enddate: "2023-01-28",
        }
    ];
    return (
        <Fragment>
            <body>
                <div class="text-center">
                    <h1>Trippy Travel</h1>
                </div>
                <br></br>
                <br></br>
                <TripList trips={DUMMY_DATA}></TripList>
                <br></br><br></br><br></br>

                <div class="text-center">
                    <button type="button" class="btn btn-primary btn-lg" onclick="location.href = 'add.html'">Plan new trip</button>
                </div>
            </body>
        </Fragment>
    );

}
export default AllTripsPage;