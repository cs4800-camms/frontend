import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function TripItem(props) {
    return (
        <div class="text-center">
    
            <div>
                <img src={props.image} class="img-fluid" alt={props.title} />
                <Link to="/itinerary">{props.title}</Link>
            </div>
    </div>

    );
}