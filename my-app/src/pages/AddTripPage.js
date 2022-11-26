import { useNavigate } from "react-router-dom";
import AddTripForm from "../components/trips/add/AddTripForm";
import NavBar from "../components/ui/NavBar";

export default function AddTripPage() {
    const navigate = useNavigate();

    function addTrip(tripInfo) {
        navigate("/all-trips");
    }

    return (
        <body>
            <NavBar></NavBar>
            <br></br>
            <AddTripForm onAddTrip={addTrip}></AddTripForm>
        </body>
    );
}