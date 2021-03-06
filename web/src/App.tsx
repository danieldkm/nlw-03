import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AuthProvider} from './contexts/auth';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
