import React, { useState } from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ sport: 'All', distance: 10 });
  const [search, setSearch] = useState('');

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="map-page">
      <nav className="map-navbar">
        <div className="logo" onClick={() => navigate('/')}>YardMate</div>
        <ul className="nav-links">
          <li><a href="/profile">Profile</a></li>
          <li><a href="/create-game">+ Create</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>
      </nav>

      <div className="controls">
        <input
          type="text"
          placeholder="Search location or game..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select name="sport" value={filters.sport} onChange={handleFilterChange}>
          <option>All Sports</option>
          <option>Frisbee</option>
          <option>Soccer</option>
          <option>Basketball</option>
          <option>Football</option>
          <option>Golf</option>
          <option>Tennis</option>   
          <option>Yoga</option>
          <option>Kickball</option>
          <option>Swimming</option>
          <option>Other...</option>
            
        </select>
        <div className="distance-filter">
          <label>Within {filters.distance} mi</label>
          <input
            type="range"
            name="distance"
            min="1"
            max="50"
            value={filters.distance}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      <div className="map-container">
        <MapContainer center={[40.7128, -74.006]} zoom={13} className="leaflet-map">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[40.7128, -74.006]}>
            <Popup>
             Pickup Soccer Game <br /> 5:30 PM EST @ Central Park
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
