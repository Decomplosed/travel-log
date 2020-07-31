import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import { listLogEntries } from './API';

import pinIcon from './icons/pin.jpeg';

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 39.8283459,
    longitude: -98.5794797,
    zoom: 4,
  });

  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      setLogEntries(logEntries);
    })();
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      mapStyle='mapbox://styles/decomplosed/ckd3k91gq05ec1iqe5yewo0b9'
    >
      {logEntries.map((entry) => (
        <Marker
          key={entry._id}
          latitude={entry.latitude}
          longitude={entry.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>
            <svg
              className='marker'
              style={{
                width: `calc(1vmin * ${viewport.zoom})`,
                height: `calc(1vmin * ${viewport.zoom})`,
              }}
              viewBox='0 0 24 24'
              fill='none'
              stroke='#179ad9'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
              <circle cx='12' cy='10' r='3'></circle>
            </svg>
          </div>
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default App;
