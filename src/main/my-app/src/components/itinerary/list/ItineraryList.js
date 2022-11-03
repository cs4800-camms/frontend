export default function ItineraryList(itineraryList, setItineraryList) {
}

    return (
        <>
            <div className="text-center">
                <h2> Itinerary List </h2>
            </div>
            <div className="container">
                        <div className="row">
                            {itineraryList.map(itinerary => (
                                <div className="col-sm-4">
                                    <TripItem
                                        key={itinerary._id}
                                        _id={itinerary._id}
            //                            image={itinerary.image}
                                        name={itinerary.name}
                                        destination={itinerary.destination}
                                        startDate={itinerary.startDate}
                                        endDate={itinerary.endDate}
                                        handleRemove={handleRemove}
                                    />
                                </div>
                            ))}
                        </div>
                        </div>
        </>
    );
}