import React, { Component } from 'react';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import { getPixelSize } from '../utils'
import { View } from 'react-native';

import Search from '../Search';
import Directions from '../Directions'

import locationIcon from '../../assets/images/locationIcon.png'

import styles from './styles'

class Maps extends React.Component {
  mapView: any;
  state = {
    region: undefined,
    destination: undefined             /*destination: {latitude: -22.8853169,longitude: -43.0504129},*/
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({ 
          region: { 
            latitude, 
            longitude, 
            latitudeDelta: 0.0143, 
            longitudeDelta: 0.0134 
          } 
        });
      },

      () => {},

      {
        timeout: 5000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }  //sucesso
    );
  }

  handleLocationSelected = (data: any, { geometry }: any ) => {
    const { location: { lat: latitude, lng: longitude } } = geometry;
    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      },
    })
  }

  render() {
    const { region, destination } = this.state; 
    return (
      <>
        <View>
          <MapView
          style={styles.map}
          loadingEnabled={true}
          toolbarEnabled={true}
          zoomControlEnabled={true}
          showsUserLocation={true}
          region={region}
          ref={ el => this.mapView = el}
        >
          { destination && (
            <>
              <Directions 
                origin={region}
                destination={destination}
                onReady={ (result: any) => {
                  this.mapView.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: getPixelSize(50),
                      left: getPixelSize(50),
                      top: getPixelSize(50),
                      bottom: getPixelSize(50)
                    }
                  });
                } 
              }
              />
              <Marker
                coordinate={destination}
                image={locationIcon}
              />
            </>
          )}
        </MapView>
        <Search onLocationSelected={this.handleLocationSelected} />
        </View>
      </>
    );
  }
}

export default Maps;