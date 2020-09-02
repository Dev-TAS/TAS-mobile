import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }: any) => (
  <MapViewDirections 
   destination={destination}
   origin={origin}
   onReady={onReady}
   apikey='AIzaSyArUFSUHzinLh7FCxCC6vZyWJu__R6cbr0'
   strokeWidth={3}
   strokeColor='#2F76B7'
  />
)

export default Directions;
