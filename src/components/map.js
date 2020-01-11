import React, { Component } from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';

class Map extends Component {
  render() {
    const position = [35.71, 51.4];

    return (
      <LeafletMap
        center={position}
        zoom={11}
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Nice</Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map;
