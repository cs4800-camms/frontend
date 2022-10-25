import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import classes from "./TripItem.module.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useNavigate } from "react-router-dom";

export default function TripItem(props) {

const navigate = useNavigate();

  const toEditForm = () => {
    navigate('/edit', { state: { _id: props._id, name: props.name, destination: props.destination, startDate: props.startDate, endDate: props.endDate } })
  }

  return (
    <div className={`text-center ${classes.align}`}>
        <img src={"/paris.png"} className={`img-fluid ${classes.image}`} alt={props.name} />
        <Link className={classes.link} to="/itinerary">{props.name}</Link>
        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"></a>
        <div class="btn-group" role="group">
        <i id="btnGroupDrop1" type="icon" className={`btn btn-sm dropdown-toggle ${classes.button}`} data-bs-toggle="dropdown" aria-expanded="false"></i>
        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <li><a onClick={() => { toEditForm() }} class="dropdown-item">Edit trip info</a></li>
          <li><a onClick={() => props.handleRemove(props._id)} class="dropdown-item" href="#">Delete trip</a></li>
        </ul>
        </div>
    </div>
  );
}