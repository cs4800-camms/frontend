import { Fragment } from "react";
import EditTripForm from "../components/trips/edit/EditTripForm";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/ui/NavBar";

export default function EditTripPage() {
    const navigate = useNavigate();

    function editTrip(tripInfo) {
        navigate("/all-trips");
    }
    
    return (
        <body>
            <NavBar></NavBar>
            <br></br>
            <EditTripForm onEditTrip={editTrip}> </EditTripForm>
        </body>
    );
}