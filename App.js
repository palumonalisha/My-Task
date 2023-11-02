
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/myScreens/Login';
import HomePage from './src/myScreens/HomePage';
import CreditcardPage from './src/myScreens/CreditcardPage';
import TransactionPage from './src/myScreens/TransactionPage';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Login" > */}
      {/* screenOptions={{HeadersShown:false}} */}

      <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="TransactionPage" component={TransactionPage}  options={{ headerShown: false }}/>
      <Stack.Screen name="CreditcardPage" component={CreditcardPage}  options={{ headerShown: false }} />
      <Stack.Screen name="HomePage" component={HomePage}  options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login}   options={{ headerShown: false }}/>
     
       
      </Stack.Navigator>
    </NavigationContainer>


  );
};


export default App;


