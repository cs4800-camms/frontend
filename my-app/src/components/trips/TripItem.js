import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import classes from "./TripItem.module.css";

export default function TripItem(props) {
    return (
        <div>
            <div class="text-center">
                <img src={props.image} className={`img-fluid ${classes.image}`} alt={props.title} />
            </div>
            <Link className={classes.link}to="/itinerary">{props.title}</Link>
        </div>

    );
}