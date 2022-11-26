import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AllTripsPage from '../../pages/all-trips/AllTripsPage';
import AddTripPage from '../../pages/AddTripPage';
import ItineraryPage from '../../pages/itinerary/ItineraryPage';
import EditTripPage from '../../pages/EditTripPage';
import GlobalContext from "../../context/global"
import LogInPage from "../../pages/LogInPage"
import LandingPage from "../../pages/LandingPage"
import SignUpPage from "../../pages/SignUpPage";

export default function App() {
    const [tripList, setTripList] = useState([]);
    const [dayList, setDayList] = useState([]);
    const [activityList, setActivityList] = useState([]);

    return (
        <GlobalContext.Provider value={{
            tripList,
            setTripList,
            dayList,
            setDayList,
            activityList,
            setActivityList,
        
        }}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<LandingPage />}></Route>
                        <Route path='/all-trips' element={<AllTripsPage />}></Route>
                        <Route path='/add-trip' element={<AddTripPage />}></Route>
                        <Route path='/itinerary/:tripId' element={<ItineraryPage />}></Route>
                        <Route path='/edit' element={<EditTripPage />}></Route>
                        <Route path='/login' element={<LogInPage />}></Route>
                        <Route path='/signup' element={<SignUpPage />}></Route>
                        <Route path='/landing' element={<LandingPage />}></Route>
                        

                    </Routes>
                </BrowserRouter>
            </div>
        </GlobalContext.Provider>
    );
}