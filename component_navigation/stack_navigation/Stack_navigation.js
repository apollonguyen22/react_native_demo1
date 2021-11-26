import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../component/account/Login';
import Signup from '../../component/account/Signup';
import Course from '../../component/course/Course';
import CourseDetail from '../../component/course/CourseDetail';
import Student from '../../component/student/Student';
import StudentAdd from '../../component/student/StudentAdd';
import StudentDetail from '../../component/student/StudentDetail';

const Stack = createNativeStackNavigator();
const Account = createNativeStackNavigator();


export const StudentStackScreen = () => {
    return <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1E90FF',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      // headerShown: false,
    }}>
        <Stack.Screen options={{
          headerShown: false,
        }} name="Student" component={Student}/>
        <Stack.Screen name="StudentDetail" component={StudentDetail}/>
        <Stack.Screen name="Course" component={Course}/>
        <Stack.Screen name="StudentAdd" component={StudentAdd}/>
        <Stack.Screen name="CourseDetail" component={CourseDetail}/>
    </Stack.Navigator>;
};

export const AccountStackScreen = () => {
    return <Account.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1E90FF',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      // headerShown: false,
    }}>
      <Account.Screen options={{
        headerShown: false,
      }} name="Login" component={Login}/>
      <Account.Screen name="Signup" component={Signup}/>
    </Account.Navigator>;
};
