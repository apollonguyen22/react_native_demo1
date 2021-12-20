import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../containers/account/Login';
import Profile from '../../containers/account/Profile';
import Signup from '../../containers/account/Signup';
import Course from '../../containers/course/Course';
import CourseDetail from '../../containers/course/CourseDetail';
import Student from '../../containers/student/Student';
import StudentAdd from '../../containers/student/StudentAdd';
import StudentDetail from '../../containers/student/StudentDetail';

const Stack = createNativeStackNavigator();
const Account = createNativeStackNavigator();

export const StudentStackScreen = () => {

    return <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1E90FF',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }}>
        <Stack.Screen options={{
          headerShown: false,
        }} name="Student" component={Student}/>

        <Stack.Screen options={{
          title: 'Detail of Student',
        }} name="StudentDetail" component={StudentDetail}/>

        <Stack.Screen options={{
          title: 'Add Course',
        }} name="Course" component={Course}/>

        <Stack.Screen options={{
          title: 'Add new Student',
        }} name="StudentAdd" component={StudentAdd}/>

        <Stack.Screen options={{
          title: 'Detail of Course',
        }} name="CourseDetail" component={CourseDetail}/>
    </Stack.Navigator>;
};

export const AccountStackScreen = () => {

    return <Account.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1E90FF',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }}>
      <Account.Screen options={{
        headerShown: false,
      }} name="Login" component={Login}/>

      <Account.Screen options={{
        title: 'Sign Up',
      }} name="Signup" component={Signup}/>

      <Account.Screen options={{
        title: 'Profile',
      }} name="ProfileAcc" component={Profile}/>
    </Account.Navigator>;
};
