/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, FlatList, LogBox, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {getAllCourseAction} from '../redux/action/CourseAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import { updateStudentAction } from '../redux/action/StudentAction';

const Course = ({navigation,route}) => {

    const dispatch = useDispatch();
    const {arrCourse} = useSelector(state => state.CourseReducer);
    const studentCourse = route.params.student;
    const [course1,setCourse] = useState([]);

    const getCourse = () => {
        dispatch(getAllCourseAction());
    };

    useEffect(() => {
        getCourse();
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []);

    const addCourseToStudent = (course) => {
        studentCourse.courses.push(course);
        dispatch(updateStudentAction(studentCourse));
        navigation.goBack(setCourse[studentCourse.courses]);
    };
    return (
        <View>
            <Text style={styles.title}>Course List</Text>
            <FlatList data={arrCourse}
                renderItem={({item}) => <View style={styles.list}>
                    <Text style={styles.listItem}>ID: {item.id}</Text>
                    <Text style={styles.listItem}>{item.courseName}</Text>
                    <View style={styles.listIcon}>
                        <Icon name="edit" size={30} style={styles.edit} color="blue" onPress={() => {navigation.navigate('CourseDetail', {item})}}/>
                        <Icon name="plus" size={30} color="green" onPress={() => {addCourseToStudent(item)}}/>
                    </View>
                </View>}
            />
            <View style={styles.button}>
                <Button title="Add new" onPress={() => {}}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontSize: 25,
    },
    listItem: {
        fontSize: 20,
        color: 'black',
        padding: 10,
    },

    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
    },

    listIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10,
        marginTop: 10,
    },

    button: {
        marginTop: 20,
        margin: 20,
    },

    edit: {
        marginRight: 5,
        marginTop: 2,
    },
});


export default Course;

