import React, { useState } from 'react';
import {useFonts} from 'expo-font';
import {Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './src/contexts/auth';

// import Routes from './src/routes';
import Routes from './src/routes';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold, 
    Nunito_800ExtraBold
  })

  if(!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

