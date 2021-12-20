/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { updateStudentAction } from '../../redux/action/StudentAction';
import * as Yup from 'yup';
import {styles} from '../../../assets/style/student/StudentDetailStyle';
import Button from '../../components/button/Button';
import Input from '../../components/input_text/Input';

const StudentDetail = ({navigation,route}) => {
    const dispatch = useDispatch();
    const student = route.params.item;
    const [course1,setCourse] = useState([]);
    const formik = useFormik({
        initialValues: {
            id: student.id,
            name: student.name,
            email: student.email,
            courses: [...student.courses],
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Required!!!'),
            email: Yup.string().required('Required!!!').email('Invalid email'),
        }),
        onSubmit: values => {
            dispatch(updateStudentAction(values));
            navigation.navigate('Student');
        },
    });

    const delete2 = (course) => {
        student.courses = student.courses.filter(cr => cr.id !== course.id);
        dispatch(updateStudentAction(student));
        setCourse([student.courses]);
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            setCourse([student.courses]);
        });
    },[navigation]);

    return (
        <View>
            <Text style={styles.title}>Update Student</Text>

            <Icon name="id-badge" size={20} style={styles.iconId}/>
            <Input styleContainer={styles.input} value={formik.values.id.toString()} editable={false}/>

            <View>
                <Icon name="user" size={20} style={styles.iconName}/>
                <Input styleContainer={styles.input} placeholder="Student Name" value={formik.values.name} onChangeText={formik.handleChange('name')}/>
                    {formik.errors.name && formik.touched.name ? (
                        <Text style={styles.error}>{formik.errors.name}</Text>
                    ) : []}
            </View>

            <View>
                <Icon name="envelope" size={20} style={styles.iconEmail}/>
                <Input styleContainer={styles.input} placeholder="Email" value={formik.values.email} onChangeText={formik.handleChange('email')}/>
                    {formik.errors.email && formik.touched.name ? (
                        <Text style={styles.error}>{formik.errors.email}</Text>
                    ) : []}
            </View>

            <Text style={styles.title}>Class Joined</Text>

            <FlatList style ={{height: 160}}
                data={student.courses}
                renderItem={({item}) => <View style={styles.list}>
                    <Text style={styles.listItem}>ID: {item.id}</Text>
                    <Text style={styles.listItem}>{item.courseName}</Text>
                    <View style={styles.listIcon}>
                        <Icon name="trash" size={30} color="red" onPress={() => {delete2(item);}}/>
                    </View>
                </View>}
            />

            <View style={styles.fixToText}>
                <Button name={'Add Course'} textColor={'#fff'} styleContainer={styles.addcourse} onPress={() => {navigation.navigate('Course', {student});}}/>
                <Button name={'Save Change'} textColor={'#fff'} styleContainer={styles.addcourse} onPress={() => {formik.handleSubmit();}}/>
            </View>
        </View>
    );
};

export default StudentDetail;
