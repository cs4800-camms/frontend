import React, { Fragment, useState, useEffect } from 'react';
import TripList from '../components/trips/TripList';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AllTripsPage() {

    const navigate = useNavigate();

    const navigateToAdd = () => {
        navigate("/add-trip");
    }

    const [isLoading, setIsLoading] = useState(true);
    const [tripList, setTripList]= useState([]);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`/trips/active`)
            .then(res => {
                console.log(res);
                return res.data;
            })
            .then((trips )=> {
                setIsLoading(false);
                console.log(trips);
                setTripList(trips);
            });
    }, []);
    if(isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

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