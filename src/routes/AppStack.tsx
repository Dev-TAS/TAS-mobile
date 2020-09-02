import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../pages/Welcome'
import SearchLocation from '../pages/SearchLocation'
import Maps from '../components/Map'

const {Navigator, Screen} = createStackNavigator();
function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Welcome' component={Welcome} />
        <Screen name='SearchLocation' component={SearchLocation} />
        <Screen name='Maps' component={Maps} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;