import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoidGltbWluc3MiLCJhIjoiY2w5eGZiNWh1MDB3YTNxcWl5ZGUwcTBrdyJ9.kOYvn6ec9_pMKvHYpeQgTQ';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (!map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
    });
    });

  return (
    <>
    <div ref={mapContainer} className="map-container" />
    <p>hello my name is shelley timmins</p>
    </>
  )
}

export default Map
