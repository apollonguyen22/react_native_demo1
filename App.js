/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../crudapi2/redux/configStore';
import Course from './component/Course';
import CourseDetail from './component/CourseDetail';
import Student from './component/Student';
import StudentAdd from './component/StudentAdd';
import StudentDetail from './component/StudentDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './component/Login';
import Signup from './component/Signup';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();
const Account = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {

  // const drawer = useRef(null);

  const StudentStackScreen = () => {
    return <Stack.Navigator screenOptions={{
      // headerStyle: {
      //   backgroundColor: '#1E90FF',
      // },
      // headerTintColor: '#fff',
      // headerTitleAlign: 'center',
      headerShown: false,
    }}>
        {/* <Stack.Screen options={{
          // headerLeft: props => <Icon name="bars" size={30} color={'#fff'}/>,
        }} name="Student" component={Student}/> */}
        <Stack.Screen options={{
          headerShown: false,
        }} name="Tab" component={TabNavi}/>
        <Stack.Screen name="StudentDetail" component={StudentDetail}/>
        <Stack.Screen name="Course" component={Course}/>
        <Stack.Screen name="StudentAdd" component={StudentAdd}/>
        <Stack.Screen name="CourseDetail" component={CourseDetail}/>
    </Stack.Navigator>;
  };

  const AccountStackScreen = () => {
    return <Account.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1E90FF',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerShown: false,
    }}>
      <Account.Screen name="Login" component={Login}/>
      <Account.Screen name="Signup" component={Signup}/>
    </Account.Navigator>;
  };

  const TabNavi = () => {
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
      }} name="StudentHome" component={Student}/>

      <Tab.Screen options={{
        tabBarIcon: ({focused}) => (
          <Icon name={focused ? 'user' : 'user'} color={focused ? '#6a5acd' : 'gray'} size={30}/>
        ),
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }} name="Profile" component={AccountStackScreen}/>
      </Tab.Navigator>;
  };

  // const navigationView = () => (
  //   <View style={[styles.container, styles.navigationContainer]}>
  //     <View style={styles.avatarView}>
  //       <Image source={{uri: 'https://picsum.photos/500/400'}} style={styles.imageDraw}/>
  //       <Text style={styles.textAvatar}>Nguyễn Hoàng Anh</Text>
  //     </View>
  //   </View>
  // );

  useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreLogs(['Reanimated 2']);
  },[]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#1E90FF',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}>
          <Drawer.Screen options={{
            headerShown: true,
            title: 'Student',
          }} name="Student1" component={StudentStackScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
