
import  'react-native-gesture-handler';
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/nav/StackNavigator';
// import { MenuLateralBasico } from './src/nav/MenuLateralBasico';
import { MenuLateral } from './src/nav/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
      {/* <StackNavigator/> */}
        {/* <MenuLateralBasico/> */}
        <MenuLateral/>
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({children}: any)=> {
  return(
  <AuthProvider>
    {children}
  </AuthProvider>)
}

export default App;