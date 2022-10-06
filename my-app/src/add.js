import { useNavigate } from "react-router-dom";
import React, { Fragment } from 'react';

function Add() {
    const navigate = useNavigate();
    return (

        <Fragment>
        <h1> Plan a new trip</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
        </Fragment>
        
    );
}
export default Add;