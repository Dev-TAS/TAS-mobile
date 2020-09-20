import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import CreateAccountSuccess from '../pages/CreateAccountSuccess'
import Landing from '../pages/Landing'
import SearchLocation from '../pages/SearchLocation'
import Maps from '../components/Map'

const {Navigator, Screen} = createStackNavigator();
function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Welcome' component={Welcome} />
        <Screen name='Login' component={Login} />
        <Screen name='CreateAccount' component={CreateAccount} />
        <Screen name='CreateAccountSuccess' component={CreateAccountSuccess} />
        <Screen name='Landing' component={Landing} />
        <Screen name='SearchLocation' component={SearchLocation} />
        <Screen name='Maps' component={Maps} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;