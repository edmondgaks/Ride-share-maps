const calculateCenter = stops => {
    let totalLat = 0;
    let totalLng = 0;
  
    for (const stop of stops) {
      totalLat += stop.location.lat;
      totalLng += stop.location.lng;
    }
  
    const center = {
      lat: totalLat / stops.length,
      lng: totalLng / stops.length,
    };
  
    return center;
};
  

export default calculateCenter;