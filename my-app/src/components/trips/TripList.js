import TripItem from "./TripItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function TripList(props) {

    const [tripList, setTripList] = useState(props.trips);

    function handleRemove(id) {
        const newTripList = tripList.filter((trip) => trip._id !== id);
        setTripList(newTripList)
    }
    
    return (
        <body>
            <div class="text-center">
                <h2> Your trips </h2>
            </div>
            <div class="row">
                {tripList.map(trip => (
                    <div class="col">
                        <TripItem
                            key={trip._id}
                            id={trip._id}
//                            image={trip.image}
                            title={trip.name}
                            destination={trip.destination}
                            startdate={trip.startDate}
                            enddate={trip.endDate}
                            handleRemove={handleRemove}
                        />
                    </div>
                ))}
            </div>
        </body>
    );
}