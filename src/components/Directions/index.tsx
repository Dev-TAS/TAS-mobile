import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }: any) => (
  <MapViewDirections 
   destination={destination}
   origin={origin}
   onReady={onReady}
   apikey='AIzaSyCX1CDvN_7D-LpF-Su6VhbE9nWTWAQm718'
   strokeWidth={3}
   strokeColor='#2F76B7'
  />
)

export default Directions;
