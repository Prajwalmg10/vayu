import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../css/map.css';
const Map=({lat,lng})=>{
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom] = useState(14);
  const [API_KEY] = useState('9kPI38jZVrArNTGJJDJK');

  useEffect(() => {    
    if (map.current) return; // stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    new maplibregl.Marker({color: "#FF0000"})
    .setLngLat([lng,lat])
    .addTo(map.current);
  }, [API_KEY,lat,lng, zoom]);
    return(<div>
  <div className="map-wrap">
    <div ref={mapContainer} className="map" />
    
  </div>
    </div>)
}

export default Map;