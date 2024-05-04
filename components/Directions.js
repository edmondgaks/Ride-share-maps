import React, { useState, useEffect, useRef } from "react";
import fetchDirections from "../utils/fetchDirections";
import calculateDistance from "../utils/calculateDistance";
import stops from "../constants/stops";





export let ANIMATION_MS = 0;

export default function Directions({ setRoute, map }) {
    const [origin] = useState("Nyabugogo");
    const [destination] = useState("Kimironko");
    const averageSpeed = 60;

  
    const [currentPosition, setCurrentPosition] = useState(stops[0].location);
    const [eta, setEta] = useState();
  
  
    useEffect(() => {
      const watchId = navigator.geolocation.watchPosition(
          (position) => {
              setCurrentPosition({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
              });
          },
          (error) => {
              console.error("Error getting current position:", error);
          }
      );
  
      return () => {
          navigator.geolocation.clearWatch(watchId);
      };
  }, []);
  
  useEffect(() => {
    if (map) {
        stops.forEach((stop, index) => {
            new window.google.maps.Marker({
                position: stop.location,
                map: map,
                label: index + 1 + "",
                title: stop.name,
            });
        });
    }
  }, [map]);
  
  useEffect(() => {
    const nextStopIndex = Math.min(
        stops.findIndex((stop) => stop.name === "Kimironko") + 1,
        stops.length - 1
    );
    const nextStop = stops[nextStopIndex];
    const distanceToNextStop = calculateDistance(
        currentPosition.lat,
        currentPosition.lng,
        nextStop.location.lat,
        nextStop.location.lng
    );
    const etaInSeconds = (distanceToNextStop / averageSpeed) * 3600;
    const etaInMinutes = Math.round(etaInSeconds / 60);
    const etaInKilometers = Math.round(distanceToNextStop * 100) / 100;
  
  
    ANIMATION_MS = etaInMinutes * 60000;
    
    setEta({
        distance: etaInKilometers,
        time: etaInMinutes,
        nextStop: nextStop.name,
    });
  }, [currentPosition]);
  
  
    useEffect(() => {
      fetchDirections(origin, destination, setRoute);
    }, [origin, destination]);
  
  
    return (
      <>
      {eta && (
        <div className="directions">
            <h4>Directions</h4>
            <h4>Nyabugogo - Kimironko</h4>
            <h5>Next Stop : {eta.nextStop}</h5>
            <div className="timeand">
                <div>
                    <h5>Distance</h5>
                    <p>{eta.distance} km</p>
                </div>
                <div>
                    <h5>Estimated Time</h5>
                    <p>{eta.time} minutes</p>
                </div>
            </div>
        </div>
    )}
      </>
    );
}

