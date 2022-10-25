import TripItem from "./TripItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from 'axios';

export default function TripList({ tripList, setTripList }) {

    function handleRemove(id) {
        const newTripList = tripList.filter((trip) => trip._id !== id);
        setTripList(newTripList)

        axios.delete(`/trips/${id}/delete`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <body>
            <div class="text-center">
                <h2> Your trips </h2>
            </div>
            <div class="container">
                        <div class="row">
                            {tripList.map(trip => (
                                <div class="col-sm-4">
                                    <TripItem
                                        key={trip._id}
                                        _id={trip._id}
            //                            image={trip.image}
                                        name={trip.name}
                                        destination={trip.destination}
                                        startDate={trip.startDate}
                                        endDate={trip.endDate}
                                        handleRemove={handleRemove}
                                    />
                                </div>
                            ))}
                        </div>
                        </div>
        </body>
    );
}