/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { FlatList, LogBox, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {getAllCourseAction} from '../../redux/action/CourseAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import { updateStudentAction } from '../../redux/action/StudentAction';
import {styles} from '../../assets/style/course/CourseStyle';
import Button from '../../component_item/button/Button';

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
            {/* <View style={styles.button}>
                <Button title="Add new" onPress={() => {}}/>
            </View> */}
            <Button name={'Add new'} textColor={'#fff'} styleContainer={styles.button}/>
        </View>
    );
};

export default Course;

