import { MapContainer, TileLayer, Marker } from "react-leaflet";
import locationIcon from "./icon-location.svg";
import L from "leaflet";

let lIcon = L.icon({
  iconUrl: locationIcon,
  iconRetinaUrl: locationIcon,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
});

const Map = () => {
  return (
    <div className="map-container">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className="map"
        style={{ height: "600px"}}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={lIcon} position={[51.505, -0.09]}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
