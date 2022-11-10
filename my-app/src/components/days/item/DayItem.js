import moment from 'moment';
import uniqid from 'uniqid';

import { useState, useEffect } from 'react';
import ActivityList from '../../activity/list/ActivityList';
import axios from 'axios';

export default function DayItem({ day, tripId }) {
    const [activityList, setActivityList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const id = uniqid();

    //gets activities for the trip
    useEffect(() => {
        setIsLoading(true);
        axios.get(`/activities/${day._id}`)
            .then((res) => {
                console.log(day._id)
                return res?.data;
            })
            .then((activities) => {
                setIsLoading(false);
                console.log(activities);
                setActivityList(activities);
            });
    }, [setActivityList, day._id]);

    return (
        <div key={day._id}>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={String("#" + id)} aria-expanded="false" aria-controls={id}>
                        {moment(day.date).format("dddd, MMMM Do")}</button>
                </h2>

                <div id={id} class="accordion-collapse collapse show" aria-labelledby="headingOne">
                    <div class="accordion-body">
                        <ActivityList dayId={day._id} activityList={activityList} setActivityList={setActivityList}  tripId={tripId}></ActivityList>
                    </div>
                </div>
            </div>
        </div>
    );
}