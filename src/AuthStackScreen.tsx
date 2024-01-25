import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ForgotPassword from './screens/ForgotPassword';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="signup" component={Signup} />
      <AuthStack.Screen name="forgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
