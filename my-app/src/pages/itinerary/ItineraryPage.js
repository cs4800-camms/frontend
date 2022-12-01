import DayList from '../../components/days/list/DayList';
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import GlobalContext from '../../context/global';
import yelp from '../../util/Yelp';
import YelpList from '../../components/yelp/list/YelpList';
import SearchBar from '../../components/search/SearchBar';
import authHeader from '../../services/auth-header';


export default function ItineraryPage() {
   
    const [trip, setTrip] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { tripId } = useParams();
    const { dayList, setDayList } = useContext(GlobalContext);
    const [businesses, setBusinesses] = useState([]);

    

    const searchYelp = async (term, location) =>{
        yelp.searchYelp(term, location).then((businesses) => {
            setBusinesses(businesses);
        }
        )
        console.log("term: " + term);
        console.log("location" + location);
       //const data = await searchYelp(term, location)
       //console.log("Data: " + data);
       //setBusinesses(data);
    }

  

    //gets trip info
    useEffect(() => {
        const getTripById = async () => {
            setIsLoading(true);
            axios.get(`/trips/get-trip/${tripId}`, { headers: authHeader() })
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
        axios.get(`/days/${tripId}`, { headers: authHeader() })
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
        <body style={{padding: "2%"}}>
            <h1>Plan Your {trip.name}</h1>
            <h4>{trip.destination}</h4>
            <br></br><br></br>
            <div class="row">
                <div className="col">
                    <h2>Itinerary</h2>
                    <DayList dayList={dayList} setDayList={setDayList} tripId={tripId} trip={trip}/>
                </div>
                <div className="col">
                    <h2>Activity Suggestions</h2>
                    <SearchBar searchYelp={searchYelp}></SearchBar>
                    <YelpList businesses={businesses}></YelpList>
                </div>
            </div>
        </body>
    );
}