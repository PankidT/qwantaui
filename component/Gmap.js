import {
    GoogleMap,
    useJsApiLoader,
  } from '@react-google-maps/api';
  
  import { React } from 'react';
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  const mapConfig = {
    center: {lat:13.736717, lng:100.523186},
    zoom: 7,
    size: {width: '99%', height: '100vh'},
    minZ: 1,
  }
  
  function Gmap() {
  
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
  
    if (!isLoaded) {
      return <div>Loding...</div>
    }
  
      return(
          <GoogleMap 
            zoom={mapConfig.zoom} 
            center={mapConfig.center} 
            mapContainerStyle={mapConfig.size}
            mapContainerClassName="map-container">
            
          </GoogleMap>
      )
  }
  
  export default Gmap