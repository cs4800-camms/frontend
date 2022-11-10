import moment from 'moment';
import uniqid from 'uniqid';

import GlobalContext from '../../../context/global';
import { useContext } from 'react';
import ActivityList from '../../activity/list/ActivityList';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function DayItem({ day, tripId }) {
    const { activityList, setActivityList } = useContext(GlobalContext);
    const [isLoading, setIsLoading] = useState(false);

    const id = uniqid();

    //gets activities for the trip
    useEffect(() => {
        setIsLoading(true);
        axios.get(`/activities/${day._id}`)
            .then((res) => {
                console.log("day Id")
                console.log(day._id)
                return res?.data;
            })
            .then((activities) => {
                setIsLoading(false);
                console.log("activities")
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
    //                <i onClick={() => handleDayRemove(singleDay._id)} class="bi bi-trash"></i>
}