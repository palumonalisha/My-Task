
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/myScreens/Login';
import HomePage from './src/myScreens/HomePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Login" > */}
      {/* screenOptions={{HeadersShown:false}} */}
      <Stack.Navigator initialRouteName="HomePage" >
      <Stack.Screen name="Homepage" component={HomePage} />
      <Stack.Screen name="Login" component={Login} />
     
       
      </Stack.Navigator>
    </NavigationContainer>


  );
};


export default App;


