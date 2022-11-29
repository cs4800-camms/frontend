import { useNavigate } from "react-router-dom";
import AddTripForm from "../components/trips/add/AddTripForm";

export default function AddTripPage() {
    const navigate = useNavigate();

    function addTrip(tripInfo) {
        navigate("/");
    }

    return (
        <section>
            <br></br><br></br><br></br>
            <h1> Plan a New Trip</h1>
            <br></br>
            <AddTripForm onAddTrip={addTrip}></AddTripForm>
        </section>
    );
}