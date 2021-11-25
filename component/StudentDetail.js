/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { updateStudentAction } from '../redux/action/StudentAction';
import * as Yup from 'yup';
const StudentDetail = ({navigation,route}) => {
    const dispatch = useDispatch();
    const student = route.params.item;
    const [course1,setCourse] = useState([]);
    // console.log('student',student);
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
            navigation.navigate('Tab');
            // console.log('formik value', values);
        },
    });

    // const deleteCourseStudent = (course) => {
    //     lodash.remove(student.courses, function(){
    //         return course.id !== student.id;
    //     });
    //     dispatch(updateStudentAction(student));
    //     // console.log(student);
    // };

    const delete2 = (course) => {
        // let student2 = {...student};
        student.courses = student.courses.filter(cr => cr.id !== course.id);
        dispatch(updateStudentAction(student));
        setCourse([student.courses]);
        // console.log('student',student);
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            setCourse([student.courses]);
        });
    },[navigation]);

    return (
        <View>
            <Text style={styles.title}>Update Student</Text>

            <Text style={styles.label}>ID</Text>
            <TextInput style={styles.input} value={formik.values.id.toString()} editable={false}/>

            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Student Name" value={formik.values.name} onChangeText={formik.handleChange('name')}/>
                {formik.errors.name && formik.touched.name ? (
                    <Text style={styles.error}>{formik.errors.name}</Text>
                ) : []}

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Email" value={formik.values.email} onChangeText={formik.handleChange('email')}/>
                {formik.errors.email && formik.touched.name ? (
                    <Text style={styles.error}>{formik.errors.email}</Text>
                ) : []}

            <Text style={styles.title}>Class Joined</Text>

            <FlatList style ={{height: 160}}
                data={student.courses}
                renderItem={({item}) => <View style={styles.list}>
                    <Text style={styles.listItem}>ID: {item.id}</Text>
                    <Text style={styles.listItem}>{item.courseName}</Text>
                    <View style={styles.listIcon}>
                        {/* <Icon name="edit" size={30} style={styles.edit} color="blue" onPress={() => {}}/> */}
                        <Icon name="trash" size={30} color="red" onPress={() => {delete2(item);}}/>
                    </View>
                </View>}
            />

            {/* <View style={styles.button}>
                <Button type="submit" title="Update" onPress={() => {
                    if (formik.handleSubmit()){
                        navigation.navigate('StudentList');
                    }
                }}/>
            </View> */}

            <View style={styles.fixToText}>
                <Button
                title="Add Course"
                onPress={() => {navigation.navigate('Course',{student});}}
                />
                <Button
                title="Save change"
                onPress={() => {formik.handleSubmit();}}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        color: '#000',
    },
    title: {
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontSize: 25,
    },
    button: {
        marginTop: 20,
        margin: 10,
    },
    error: {
        color: 'red',
        marginLeft: 12,
    },
    label: {
        marginLeft: 12,
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
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
    edit: {
        marginRight: 5,
        marginTop: 2,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        // paddingLeft: 10,
        // paddingRight: 10,
    },
});

export default StudentDetail;
