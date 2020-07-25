import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl'

const App = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    heigh: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
};

export default App;
