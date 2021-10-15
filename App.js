import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthProvider } from './src/Context/AuthContext';
import AuthNavigation from './src/Navigator/AuthNavigation';

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <AuthNavigation /> 
    </NavigationContainer>
    </AuthProvider>
  );
}

