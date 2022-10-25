import { Fragment } from "react";
import EditTripForm from "../components/trips/EditTripForm";
import { useNavigate } from "react-router-dom";

function EditTripPage() {
    const navigate = useNavigate();

    function editTrip(tripInfo) {
        navigate("/");
    }
    
    return (
        <Fragment>
            <h1> Edit Your Trip</h1>
            <EditTripForm onEditTrip={editTrip}> </EditTripForm>
        </Fragment>
    );
}
export default EditTripPage;