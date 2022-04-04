import React from "react"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  render() {
    return (
        <Map
                google={this.props.google}
                // style={style}
                initialCenter={{
                  lat: [this.item.geo.lat],
                  lng: [this.item.geo.lng]
                }}
                zoom={15}
                onClick={this.onMapClicked}
              />
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyD-sAqxa1pZqF4tk7eR83ZS7wOCEmsxKwI")
})(MapContainer)