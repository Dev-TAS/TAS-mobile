import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import CreateAccountSuccess from '../pages/CreateAccountSuccess'
import Landing from '../pages/Landing'
import Profile from '../pages/Profile'
import SearchLocation from '../pages/SearchLocation'
import Locations from '../pages/Locations'
import CreateLocation from '../pages/CreateLocation'
import Shop from '../pages/Shop'
import CreateCoupons from '../pages/CreateCoupons'
import Maps from '../components/Maps'
import AboutUs from '../pages/AboutUs'

const {Navigator, Screen} = createStackNavigator();
function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Welcome' component={Welcome} />
        <Screen name='AboutUs' component={AboutUs} />
        <Screen name='Login' component={Login} />
        <Screen name='CreateLocation' component={CreateLocation} />
        <Screen name='Maps' component={Maps} />
        <Screen name='CreateAccount' component={CreateAccount} />
        <Screen name='CreateAccountSuccess' component={CreateAccountSuccess} />
        <Screen name='Landing' component={Landing} />
        <Screen name='Profile' component={Profile} />
        <Screen name='SearchLocation' component={SearchLocation} />
        <Screen name='Locations' component={Locations} />
        <Screen name='Shop' component={Shop} />
        <Screen name='CreateCoupons' component={CreateCoupons} />
        
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;