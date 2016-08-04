import React from 'react';
import { LmapLite } from 'react-redux-leaflet';
import { Map } from 'immutable';
import L from 'leaflet';

import ReactPopup from '../../src';
import MyPopupComponent from './MyPopupComponent';

const LiteMap = () => (
  <div>
    <h4>React Leaflet Popup</h4>
    <div style={{ width: 600, height: 600 }}>
      <LmapLite
        lmapId="simpleLite"
        defaultCenter={new Map({ x: 44, y: 56 })}
        defaultZoom={5}
        defaultLayers={
          [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')]
        }
        onMapCreate={lmap => {
          lmap.leafletMap.on('click', e => {
            lmap.leafletMap.openPopup(new ReactPopup({
              reactComponent: MyPopupComponent,
              reactComponentProps: { latlng: e.latlng },
            }).setLatLng(e.latlng));
          });
        }}
      />
    </div>
  </div>
);

export default LiteMap;
