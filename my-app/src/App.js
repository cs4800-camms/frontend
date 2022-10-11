import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllTripsPage from './pages/AllTrips';
import AddTripPage from './pages/AddTrip';
import { BrowserRouter } from 'react-router-dom';
import ItineraryPage from './pages/Itinerary';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AllTripsPage />}>
                    </Route>
                    <Route path='/add-trip' element={<AddTripPage />}>
                    </Route>
                    <Route path='/itinerary' element={<ItineraryPage />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>


    );
}
export default App;
