import React from 'react';
import {useLocation} from 'react-router-dom';
// import { ActivityIndicator, View } from 'react-native';

// import Splash from '../components/Splash';

import {useAuth} from '../contexts/auth';

// import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
// import Norestrict from './norestrict.routes';

const Routes: React.FC = () => {
  const location = useLocation();
  const {signed, loading} = useAuth();
  
  if(loading) {
    return (
      // <Splash/>
      <div style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        loading
        {/* <ActivityIndicator size="large" color="#666"></ActivityIndicator> */}
      </div>
    )
  }
  return <AppRoutes/>;

  // if(location.pathname.includes('dashboard')) {
  //   console.log('area restrita')
  //   console.log('signed', signed);
  //   // return signed ? (<AppRoutes/>) : (<AuthRoutes/>);
  //   return <AppRoutes/>;
  // } else if (location.pathname.includes('signin')) {
  //   console.log('area restrita')
  //   console.log('signed', signed);
  //   return <AuthRoutes/>;
  // }
  // return <Norestrict/>;
}

export default Routes;