import stops from "./stops";

const mapOptions = {
    mapId: process.env.NEXT_PUBLIC_MAP_API_KEY,
    center: stops[0].location,
    zoom: 13,
    disableDefaultUI: true,
    heading: 25,
    tilt: 60,
};

export default mapOptions  