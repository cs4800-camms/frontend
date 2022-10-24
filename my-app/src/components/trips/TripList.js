import TripItem from "./TripItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function TripList(props) {

    const [tripList, setTripList] = useState(props.trips);

    function handleRemove(id) {
        const newTripList = tripList.filter((trip) => trip.id !== id);
        setTripList(newTripList)
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
                                key={trip.id}
                                id={trip.id}
                                image={trip.image}
                                tripName={trip.tripName}
                                tripDestination={trip.tripDestination}
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