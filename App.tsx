import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStackScreen from './src/HomeStackScreen';
import AuthStackScreen from './src/AuthStackScreen';
import Splash from './src/screens/Welcome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Welcome'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Splash} />
        <Stack.Screen name="Hometabs" component={HomeStackScreen} />
        <Stack.Screen name="Auth" component={AuthStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
