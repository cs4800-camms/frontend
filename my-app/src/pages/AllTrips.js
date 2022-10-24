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
            tripName: 'My trip #1',
            image: "/paris.png",
            tripDestination: "Paris, France",
            startDate: "2022-10-20",
            endDate: "2022-10-25",
        },

        {
            _id: 't2',
            tripName: 'My trip #2',
            image: "/rome.png",
            tripDestination: "Rome, Italy",
            startDate: "2022-12-25",
            endDate: "2023-01-10",
        },
        {
            id: 't3',
            tripName: 'My trip #3',
            image: "/paris.png",
            tripDestination: "Paris, France",
            startDate: "2023-01-20",
            endDate: "2023-01-25",
        },
        {
            id: 't4',
            tripName: 'My trip #4',
            image: "/rome.png",
            tripDestination: "Tokyo, Japan",
            startDate: "2023-02-21",
            endDate: "2023-03-20",
        }
    ];

    const [tripList, setTripList] = useState(DUMMY_DATA);
    //TODO: add the new trip to the list, but how do I do that :(( 

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
                    <button onClick={navigateToAdd} type="button" class="btn btn-primary btn-lg">Plan new trip</button>
                </div>
            </body>
        </Fragment>
    );

}
export default AllTripsPage;