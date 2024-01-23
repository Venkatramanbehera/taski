import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import NotesScreen from './screens/NotesScreen';
import SettingScreen from './screens/SettingScreen';
import TabBar from './TabBar';

const TabStack = createBottomTabNavigator();

const MyTabBar = (props: any) => <TabBar {...props} />;

const HomeStackScreen = () => {
  return (
    <TabStack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}
      tabBar={MyTabBar}>
      <TabStack.Screen name="home" component={HomeScreen} />
      <TabStack.Screen name="analytics" component={AnalyticsScreen} />
      <TabStack.Screen name="notes" component={NotesScreen} />
      <TabStack.Screen name="settings" component={SettingScreen} />
    </TabStack.Navigator>
  );
};

export default HomeStackScreen;
