import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { AccountStackScreen, StudentStackScreen } from '../stack_navigation/Stack_navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import Profile from '../../containers/account/Profile';


const Tab = createBottomTabNavigator();

export const TabNavi = () => {

    const {userLoginDetail} = useSelector(state => state.AccountReducer);

    return <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen options={{
        tabBarIcon: ({focused}) => (
          <Icon name={focused ? 'home' : 'home'} color={focused ? '#6a5acd' : 'gray'} size={30}/>
        ),
        tabBarLabel: 'Student',
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }} name="StudentHome" component={StudentStackScreen}/>

      <Tab.Screen options={{
        tabBarIcon: ({focused}) => (
          <Icon name={focused ? 'user' : 'user'} color={focused ? '#6a5acd' : 'gray'} size={30}/>
        ),
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }} name="Profile" component={!userLoginDetail.length ? AccountStackScreen : Profile}/>
      </Tab.Navigator>;
};
