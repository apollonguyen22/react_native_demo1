import { useFormik } from 'formik';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

const CourseDetail = ({navigation,route}) => {

    // const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            id: route.params.item.id,
            courseName: route.params.item.courseName,
            author: route.params.item.author,
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    // const studentCourseAdd = route.params.studentCourse;
    // console.log('studentCourseAdd', studentCourseAdd);

    // const pressAdd = () => {
    //     formik.handleSubmit();
    //     navigation.navigate('Course');
    // };

    return (
        <View>
            <Text style={styles.title}>Course Detail</Text>

            <Text style={styles.label}>ID</Text>
            <TextInput style={styles.input} value={formik.values.id.toString()} editable={false}/>

            <Text style={styles.label}>Course Name</Text>
            <TextInput style={styles.input} placeholder="Course Name" value={formik.values.courseName} onChangeText={formik.handleChange('courName')} editable={false}/>

            <Text style={styles.label}>Author</Text>
            <TextInput style={styles.input} placeholder="Author" value={formik.values.author} onChangeText={formik.handleChange('author')} editable={false}/>

            {/* <View style={styles.fixToText}>
                <Button
                title="Add Course"
                onPress={() => {pressAdd()}}
                />
                <Button
                title="Back"
                onPress={() => {navigation.navigate('Course')}}
                />
            </View> */}
        </View>
    );
};

export default CourseDetail;

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
