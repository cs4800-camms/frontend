import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
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

    //adds a day to backend
    const handleDayAdd = async () => {
        const dayInfo = dayList.length === 0 ? {
            trip_id: tripId,
            date: new Date(moment(new Date(trip.startDate)).add(1, 'days'))
          } : {
            trip_id: tripId,
            date: new Date(moment(new Date(dayList[dayList.length-1].date)).add(1, 'days'))
          }
        console.log(dayInfo);

        await axios.post(`/days/create`, dayInfo)
        .then(function (response) {
            console.log(response);
            addDay(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

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