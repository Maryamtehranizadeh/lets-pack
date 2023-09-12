import React from 'react';
import Location from './Location';
import Map from './Map';

function LocationMap() {
  return (
    <div className= "row lead fw-bold text-muted py-4 bg-light align-items-center justify-content-space-around">
      <Location></Location>
      <Map></Map>
    </div>
  );
}

export default LocationMap