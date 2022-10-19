import TripItem from "./TripItem";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TripList(props) {
    return (
        <body>
            <div class="text-center">
                <h2> Your trips </h2>
            </div>
            <div class="row">
                {props.trips.map(trip => (
                    <div class="col">
                        <TripItem
                            key={trip.id}
                            id={trip.id}
                            image={trip.image}
                            title={trip.title}
                            location={trip.location}
                            startdate={trip.startdate}
                            enddate={trip.enddate}
                        />
                    </div>
                ))}
            </div>
        </body>
    );
}