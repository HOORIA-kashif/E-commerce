import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix for marker icons
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapSection = () => {
  // Example markers for countries
  const locations = [
    { id: 1, name: "United States", lat: 37.0902, lng: -95.7129 },
    { id: 2, name: "India", lat: 20.5937, lng: 78.9629 },
    { id: 3, name: "Germany", lat: 51.1657, lng: 10.4515 },
    { id: 4, name: "Australia", lat: -25.2744, lng: 133.7751 },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Our Reach Around the Globe
      </h2>
      <div className="h-96">
        <MapContainer
          center={[20, 0]} // Center of the map
          zoom={2}
          style={{ height: "100%", width: "100%" }}
        >
          {/* Base Layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Markers */}
          {locations.map((location) => (
            <Marker key={location.id} position={[location.lat, location.lng]}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSection;
