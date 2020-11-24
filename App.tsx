import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Updates from 'expo-updates';

import AppStack from './src/routes/AppStack'

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular, 
    Archivo_700Bold,
    Poppins_400Regular, 
    Poppins_600SemiBold
  });

  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync(); // depende da sua estratégia
      }
    }
    updateApp();
  }, []);
  
  if(!fontsLoaded) {
    return <AppLoading />

  } else {
    return (
      <>
        <StatusBar style="dark" />
        <AppStack />  
      </>
    );
  }
}