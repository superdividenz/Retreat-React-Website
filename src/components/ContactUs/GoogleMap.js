import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';


const Map = withScriptjs(withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 39.064320, lng: -90.348590 }}
    >
    </GoogleMap>
  );
}));

export default function App() {
  return (
    <div style={{ 
      width: '400px', 
      height: '400px',
      p: 4 
      }}>
      <Map 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIuToZZetv0JCLsiLueD5gWRApNTZTtK0"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
