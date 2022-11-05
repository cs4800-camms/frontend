import DayList from '../../components/days/list/DayList';
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import GlobalContext from '../../context/global';
import { useContext } from "react";

export default function ItineraryPage() {

    const [trip, setTrip] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { tripId } = useParams();
    const { dayList, setDayList } = useContext(GlobalContext);

    //gets trip info
    useEffect(() => {
        const getTripById = async () => {
            setIsLoading(true);
            axios.get(`/trips/${tripId}`)
                .then((res) => {
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

    //gets days for the trip
    useEffect(() => {
        setIsLoading(true);
        axios.get(`/days/${tripId}`)
            .then((res) => {
                return res?.data;
            })
            .then((days) => {
                setIsLoading(false);
                console.log(days);
                setDayList(days);
            });
    }, [setDayList, tripId]);

    if(isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <body>
            <h1>Plan Your {trip.name}</h1>
            <br></br><br></br>
            <div class="row">
                <div className="col">
                    <h2>Itinerary</h2>
                    <DayList dayList={dayList} setDayList={setDayList} tripId={tripId} trip={trip}/>
                </div>
                <div className="col">
                    <h2>Activity Suggestions</h2>
                </div>
            </div>
        </body>
    );
}