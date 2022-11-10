import axios from "axios";
import ActivityItem from "../item/ActivityItem";
import { useState } from "react";

export default function ActivityList({ activityList, setActivityList, dayId, tripId }) {
    const [activityInfo, setActivityInfo] = useState({
        _id: "1",
        day_id: dayId,
        trip_id: tripId,
        name: "",
        location: "Sad land",
        checked: false,
    });

    const addActivity = (newActivity) => {
        setActivityList((oldActivities) => [...oldActivities, newActivity]);
    }

    const handleActivityAdd = async (e) => {
        e.preventDefault();
        console.log(activityInfo);

        await axios.post(`/activities/create`, activityInfo)
            .then(function (response) {
                console.log(response);
                addActivity(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleRemove(id) {
        const newActivityList = activityList.filter((activity) => activity._id !== id);
        setActivityList(newActivityList)

        axios.delete(`/activities/${id}`)
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
                        <ActivityItem key={activity._id} activity={activity} remove={handleRemove} />
                    </div>
                ))}
            </ul>

            <input type="text" class="form-control" id="floatingInput" placeholder="Activity name" onChange={(e) => setActivityInfo({ ...activityInfo, name: e.target.value })} value={activityInfo.name} />
            <button onClick={handleActivityAdd} type="button" class="btn btn-primary" style={{ marginLeft: '3rem' }}>Add Activity</button>
        </div>
    );
}