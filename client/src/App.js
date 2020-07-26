import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 39.8283459,
    longitude: -98.5794797,
    zoom: 4,
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      mapStyle='mapbox://styles/decomplosed/ckd3k91gq05ec1iqe5yewo0b9'
    />
  );
};

export default App;
