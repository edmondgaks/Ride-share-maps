import { getGeocode, getLatLng } from "use-places-autocomplete";
import stops from "../constants/stops";



export default async function fetchDirections(origin, destination, setRoute) {
    const [originResults, destinationResults] = await Promise.all([
      getGeocode({ address: origin }),
      getGeocode({ address: destination }),
    ]);
  
    const [originLocation, destinationLocation] = await Promise.all([
      getLatLng(originResults[0]),
      getLatLng(destinationResults[0]),
    ]);
  
    const waypoints = stops.map(stop => ({
      location: `${stop.location.lat},${stop.location.lng}`,
      stopover: true
    }));
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: originLocation,
        destination: destinationLocation,
        waypoints: waypoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          const route = result.routes[0].overview_path.map((path) => ({
            lat: path.lat(),
            lng: path.lng(),
          }));
          setRoute(route);
        }
      }
    );
  }