import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useState } from "react";
import moment from 'moment';
import DayItem from "../item/DayItem";

export default function DayList({dayList, setDayList, tripId, trip}) {

    //to calculate total days
    var startDate = moment(new Date(trip.startDate)).add(1, 'days')
    var endDate = moment(new Date(trip.endDate)).add(1, 'days')
    const totalDays = endDate.diff(startDate, 'days') + 1;

    //adds a day to frontend
    const addDay = (newDay) => {
        setDayList((oldDays) => [...oldDays, newDay]);
    }

    //sets the date
    const [currentDate, setCurrentDate] = useState(dayList.length === 0 ?
        new Date(trip.startDate) : new Date(dayList[dayList.length-1].date));

    //adds a day to backend
    const handleDayAdd = async () => {
        const dayInfo = {
            trip_id: tripId,
            date: new Date(moment(currentDate).add(1, 'days'))
        }
        console.log(dayInfo);

        await axios.post(`/days/create`, dayInfo)
        .then(function (response) {
            console.log(response);
            addDay(response.data);
            setCurrentDate(new Date(response.data.date));
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    //handles delete
//    const handleDayRemove = async (id) => {
//        const newDayList = dayList.filter((day) => day._id !== id);
//        setDayList(newDayList);
//
//        await axios.delete(``)
//    }

    //checks whether to render the button or not
    let button;
    if(dayList.length !== totalDays) {
        button = <button onClick={handleDayAdd} type="button" className="btn btn-primary btn-m">Add a day</button>;
    } else {
        button = <button hidden onClick={handleDayAdd} type="button" className="btn btn-primary btn-m">Add a day</button>;
    }

    return (
        <div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                {dayList.map((day, index) => (
                    <DayItem day={day} />
                ))}
            </div>
            {button}
        </div>
    );
}