import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllTripsPage from './pages/AllTrips';
import AddTripPage from './pages/AddTrip';
import { BrowserRouter } from 'react-router-dom';
import ItineraryPage from './pages/Itinerary';
import EditTripPage from './pages/EditTrip';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AllTripsPage />}></Route>
                    <Route path='/add-trip' element={<AddTripPage />}></Route>
                    <Route path='/itinerary' element={<ItineraryPage />}></Route>
                    <Route path='/edit' element={<EditTripPage />}></Route> 
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
