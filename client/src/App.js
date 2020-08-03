import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import { listLogEntries } from './API';

import pinIcon from './icons/pin.jpeg';

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
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
        <>
          <Marker
            key={entry._id}
            latitude={entry.latitude}
            longitude={entry.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div
              onClick={() => setShowPopup(...showPopup, { [entry._id]: true })}
            >
              <img
                style={{
                  height: `calc(1vmin * ${viewport.zoom})`,
                  width: `calc(1vmin * ${viewport.zoom})`,
                }}
                className='marker'
                src={pinIcon}
                alt='pin'
              />
            </div>
          </Marker>
          {showPopup[entry._id] ? (
            <Popup
              latitude={entry.latitude}
              longitude={entry.longitude}
              anchor='top'
              onClose={() => setShowPopup(...showPopup, { [entry._id]: false })}
            >
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.comments}</p>
              </div>
            </Popup>
          ) : (
            ''
          )}
        </>
      ))}
    </ReactMapGL>
  );
};

export default App;
