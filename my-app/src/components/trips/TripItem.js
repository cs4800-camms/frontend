import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import classes from "./TripItem.module.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useNavigate } from "react-router-dom";

export default function TripItem(props) {
  const navigate = useNavigate();

  const toEditForm = () => {
    navigate('/edit', { state: { id: props.id, tripName: props.tripName, tripDestination: props.tripDestination, startDate: props.startDate, endDate: props.endDate } })
  }
  
  return (
    <div>
      <img src={props.image} className={`img-fluid ${classes.image}`} alt={props.tripName} />
      <Link className={classes.link} to="/itinerary">{props.tripName}</Link>
      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"></a>
      <div class="btn-group" role="group">
        <i id="btnGroupDrop1" type="icon" className={`btn btn-sm dropdown-toggle ${classes.button}`} data-bs-toggle="dropdown" aria-expanded="false"></i>
        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <li><a onClick={() => { toEditForm() }} class="dropdown-item">Edit trip info</a></li>
          <li><a onClick={() => props.handleRemove(props.id)} class="dropdown-item" href="#">Delete trip</a></li>
        </ul>
      </div>
    </div>
  );
}