import { useFormik } from 'formik';
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addStudentAction } from '../redux/action/StudentAction';
import * as Yup from 'yup';

const StudentAdd = ({navigation}) => {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Required!!!'),
            email: Yup.string().required('Required!!!').email('Invalid email'),
        }),
        onSubmit: values => {
            dispatch(addStudentAction(values));
            navigation.navigate('Tab');
        },
    });

    return (
        <View>
            <Text style={styles.title}>Add Student</Text>

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

            <View style={styles.button}>
                <Button type="submit" title="Add" onPress={() => {formik.handleSubmit();}}/>
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
});
export default StudentAdd;
