import React from 'react';

const MyReactComponent = ({ latlng }) => (
  <div style={{ margin: 10 }}>
    <p>Latitude: <strong>{latlng.lat}</strong></p>
    <p>Longitude: <strong>{latlng.lng}</strong></p>
  </div>
);

export default MyReactComponent;
