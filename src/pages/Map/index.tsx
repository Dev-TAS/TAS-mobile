import React, { Component } from 'react'
import MapView from 'react-native-maps'
import Geocoder from 'react-native-geocoding';

import styles from './styles'

const Maps = () => {
    return (
      <MapView
        style={styles.map}
        loadingEnabled={true}
        toolbarEnabled={true}
        zoomControlEnabled={true}
        showsUserLocation
        region={{
          latitude: -27.210753,//(this.state.origin.latitude + this.state.destination.latitude) / 2,
          longitude: -49.644183,//(this.state.origin.longitude + this.state.destination.longitude) / 2,
          latitudeDelta: 0.0143,//Math.abs(this.state.origin.latitude - this.state.destination.latitude) + Math.abs(this.state.origin.latitude - this.state.destination.latitude) * .1,
          longitudeDelta: 0.0134//Math.abs(this.state.origin.longitude - this.state.destination.longitude) + Math.abs(this.state.origin.longitude - this.state.destination.longitude) * .1,
        }}
      >
        
      </MapView>
    );
}

export default Maps;