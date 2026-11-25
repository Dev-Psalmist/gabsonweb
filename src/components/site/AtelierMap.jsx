import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ADDRESS, DIRECTIONS_LINK } from "./data";

const markerIcon = L.divIcon({
  className: "gabson-marker",
  html: '<span style="display:block;width:16px;height:16px;transform:rotate(45deg);background:#7D382D;border:1px solid #F2ECE3;box-shadow:0 0 0 7px rgba(125,56,45,0.28)"></span>',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

export default function AtelierMap() {
  const position = [ADDRESS.coords.lat, ADDRESS.coords.lng];

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className="gabson-map"
      style={{ height: "100%", width: "100%", background: "#0a0a0b" }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px" }}>
            <strong>Gabson Atelier</strong>
            <br />
            {ADDRESS.line1}
            <br />
            {ADDRESS.line2}
            <br />
            <a href={DIRECTIONS_LINK} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}