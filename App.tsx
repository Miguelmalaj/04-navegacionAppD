import 'react-native-gesture-handler';

import React from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContext';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <MenuLateralBasico/> */}
        {/* <StackNavigator /> */}
        <Tabs/>
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;