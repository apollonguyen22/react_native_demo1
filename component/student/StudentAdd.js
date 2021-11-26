import { useFormik } from 'formik';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { addStudentAction } from '../../redux/action/StudentAction';
import * as Yup from 'yup';
import { styles } from '../../assets/style/student/StudentAddStyle';
import Button from '../../component_item/button/Button';

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
            navigation.navigate('Student');
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

            {/* <View style={styles.button}>
                <Button type="submit" title="Add" onPress={() => {formik.handleSubmit();}}/>
            </View> */}
            <Button name={'Add'} textColor={'#fff'} styleContainer={styles.button}/>

        </View>
    );
};

export default StudentAdd;
