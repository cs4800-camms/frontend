import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AllTripsPage from '../../pages/all-trips/AllTripsPage';
import AddTripPage from '../../pages/AddTripPage';
import ItineraryPage from '../../pages/itinerary/ItineraryPage';
import EditTripPage from '../../pages/EditTripPage';
import GlobalContext from "../../context/global"

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
            setActivityList
        }}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<AllTripsPage />}></Route>
                        <Route path='/add-trip' element={<AddTripPage />}></Route>
                        <Route path='/itinerary/:tripId' element={<ItineraryPage />}></Route>
                        <Route path='/edit' element={<EditTripPage />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </GlobalContext.Provider>
    );
}