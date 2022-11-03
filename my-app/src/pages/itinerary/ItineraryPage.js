import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./ItineraryPage.module.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment';
import GlobalContext from '../../context/global';
import { useContext } from "react";


export default function ItineraryPage() {

    const [trip, setTrip] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { tripId } = useParams();
    //const [dayList, setDayList] = useState(['']);
    //const [curr   entDate, setCurrentDate] = useState(new Date)
    //const currentDay = new Date(trip.startDate?.substring(0,10));
    const { dayList, setDayList } = useContext(GlobalContext);


    var startDate = moment(new Date(trip.startDate)).add(1, 'days')

    var currentDate = moment(new Date(trip.startDate))


    var nextDay = moment(trip.startDate).add(1, 'days')
    var endDate = moment(new Date(trip.endDate)).add(1, 'days')
    console.log("Start date: " + startDate.format("dddd, MMMM Do"))
    console.log("Next day: " + nextDay.format("dddd, MMMM Do"));
    console.log("End date: " + endDate.format("dddd, MMMM Do"));
    const totalDays = endDate.diff(startDate, 'days') + 1;
    console.log("Total days: " + totalDays);



    const handleDayAdd = () => {
        setDayList([...dayList, ''])
    }

    const handleDayRemove = (index) => {
        const newDayList = [...dayList];
        newDayList.splice(index, 1)
        setDayList(newDayList);

    }

    useEffect(() => {
        const getTripById = async () => {
            setIsLoading(true);
            axios.get(`/trips/${tripId}`)
                .then((res) => {
                    console.log(res);
                    return res?.data;
                })
                .then((tripData) => {
                    setIsLoading(false);
                    console.log(tripData);
                    setTrip(tripData);
                });
        }

        getTripById();
    }, [tripId]);

    return (
        <body>
            <h1>Plan Your {trip.name}</h1>
            <br></br><br></br>
            <div class="row">
                <div className="col">
                    <div className={`accordion ${classes.accordion}`} id="accordionPanelsStayOpenExample">

                        {dayList.map((singleDay, index) => (

                            <div key={index}>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            {currentDate.add(1, 'days').format("dddd, MMMM Do")}</button>
                                    </h2>
                                </div>
                                {dayList.length > 1 && (
                                    <i onClick={() => handleDayRemove(index)} class="bi bi-trash"></i>
                                )}

                                {dayList.length - 1 === index && dayList.length < totalDays &&
                                    (
                                        <button onClick={handleDayAdd} type="button" className="btn btn-primary btn-m">Add a day</button>
                                    )}

                            </div>




                        ))}

                    </div>

                </div>



                <div className="col">
                    <h2>Activity Suggestions</h2>
                </div>
            </div>
        </body>
    );
}