import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import Splash from '../components/Splash';

import {useAuth} from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();
  
  if(loading) {
    return (
      <Splash/>
      // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        // <ActivityIndicator size="large" color="#666"></ActivityIndicator>
      // </View>
    )
  }
  
  return signed ? (<AppRoutes/>) : (<AuthRoutes/>);
}

export default Routes;