import React, { useState, useEffect, useRef } from "react";
import Directions from "./Directions";
import Animate from "./Animate";

const stops = [
    { name: "Nyabugogo", location: { lat: -1.939826787816454, lng:  30.0445426438232 } },
    { name: "Stop A", location: { lat: -1.9355377074007851, lng: 30.060163829002217 } },
    { name: "Stop B", location: { lat: -1.9358808342336546, lng: 30.08024820994666 } },
    { name: "Stop C", location: { lat: -1.9489196023037583, lng: 30.092607828989397 } },
    { name: "Stop D", location: { lat: -1.9592132952818164, lng: 30.106684061788073 } },
    { name: "Stop E", location: { lat: -1.9487480402200394, lng: 30.126596781356923 } },
    { name: "Kimironko", location: { lat: -1.9365670876910166, lng: 30.13020167024439 } }, // Ending Point
];

const mapOptions = {
    mapId: "9ad5c5c630d1f37a",
    center: stops[0].location,
    zoom: 13,
    disableDefaultUI: true,
    heading: 25,
    tilt: 60,
};
  
  
export default function MyMap() {
    const [route, setRoute] = useState();
    const [map, setMap] = useState();
    const [currentPosition, setCurrentPosition] = useState(stops[0].location);
    const ref = useRef();
  
  
    useEffect(() => {
      setMap(new window.google.maps.Map(ref.current, mapOptions));
      
    }, []);
    console.log(route)
  
    
    return (
      <>
        <div ref={ref} id="map" />
        {map && <Directions setRoute={setRoute} map={map} />}
        {map && route && <Animate map={map} route={route} />}
      </>
    );
  }