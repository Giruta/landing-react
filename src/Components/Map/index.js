import React, {useEffect} from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const mapStyles = [
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#444444'
      }
    ]
  },
  {
    featureType: 'Landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f2f2f2'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#46bcec'
      },
      {
        visibility: 'on'
      }
    ]
  }
];
const containerStyle = {
  width: '100%',
  height: '100%'
};
const center = {
  lat: 48.46017973790971,
  lng: 35.0434
};
const position = {
  lat: 48.46017973790971,
  lng: 35.0434
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

const Map = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
  })
  const mapRef = React.useRef();
  const onLoad = (map) => {
    mapRef.current = map;
  }
  const onUnMount = () => {
    mapRef.current = null;
  }
  if(!isLoaded) return <div>Map Loading...</div>

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnMount}
      >
        <Marker position={position}/>
      </GoogleMap>
  )
}
export default Map;
