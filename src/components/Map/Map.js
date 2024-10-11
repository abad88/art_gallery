import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";

const Map = () => {
    const mapStyles = {
        height: "400px",
        border: "10px solid #c38c31",
        margin: "25px",
    };

    const defaultCenter = {
        lat: 40.7649, // Latitude
        lng: -73.9749, // Longitude 
    };

    return (
        <>
            <h2>Location</h2>
            <LoadScript googleMapsApiKey="AIzaSyDfBNRRH0LtUcc0h1flEGagnx2SBCl-O9I">
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                >
                    <Marker position={defaultCenter} />
                </GoogleMap>
            </LoadScript>
        </>

    );
};

export default Map;
