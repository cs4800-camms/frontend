import axios from "axios";
import ActivityItem from "../item/ActivityItem";
import { useState } from "react";
import classes from "./ActivityList.module.css";
import { Form } from "react-bootstrap";
import authHeader from '../../../services/auth-header';

export default function ActivityList({ activityList, setActivityList, dayId, tripId }) {
    const [activityInfo, setActivityInfo] = useState({
        day_id: dayId,
        trip_id: tripId,
        name: "",
        checked: false,
    });

    const addActivity = (newActivity) => {
        setActivityList((oldActivities) => [...oldActivities, newActivity]);
    }

    function toggleCheck(id) {
        setActivityInfo({...activityInfo, checked: !activityInfo.checked})

        axios.put(`/activities/${id}/update`, activityInfo, { headers: authHeader() })
            .then(function (response) {
                console.log(response);
                setActivityList(oldActivities => oldActivities.map(oldActivity => oldActivity._id === response.data._id ? response.data : oldActivity));
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleActivityAdd = async (e) => {
        e.preventDefault();
        console.log(activityInfo);

        await axios.post(`/activities/create`, activityInfo, { headers: authHeader() })
            .then(function (response) {
                console.log(response);
                addActivity(response.data);
                setActivityInfo({day_id: dayId, trip_id: tripId, name:"", checked:false});

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleRemove(id) {
        const newActivityList = activityList.filter((activity) => activity._id !== id);
        setActivityList(newActivityList)

        axios.delete(`/activities/${id}`, { headers: authHeader() })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <ul class="list-group mb-0">
                {activityList.map((activity, index) => (
                    <div>
                        <ActivityItem key={activity._id} activity={activity} remove={handleRemove} check={toggleCheck}/>
                    </div>
                ))}
            </ul>
            <Form onSubmit={handleActivityAdd}>
                <input type="text" class="form-control" id="floatingInput" placeholder="Activity name" onChange={(e) => setActivityInfo({ ...activityInfo, name: e.target.value })} value={activityInfo.name} required />
                <button className={`btn btn-primary ${classes.button}`} >Add Activity</button>
            </Form>
        </div>
    );
}