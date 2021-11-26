import { useFormik } from 'formik';
import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addStudentAction } from '../../redux/action/StudentAction';
import * as Yup from 'yup';
import { styles } from '../../assets/style/student/StudentAddStyle';
import Button from '../../component_item/button/Button';
import Input from '../../component_item/input_text/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

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

            <Icon name="user" size={20} style={styles.iconId}/>
            <Input styleContainer={styles.input} placeholder="Student Name" value={formik.values.name} onChangeText={formik.handleChange('name')}/>
                {formik.errors.name && formik.touched.name ? (
                    <Text style={styles.error}>{formik.errors.name}</Text>
                ) : []}

            <Icon name="envelope" size={20} style={styles.iconEmail}/>
            <Input styleContainer={styles.input} placeholder="Email" value={formik.values.email} onChangeText={formik.handleChange('email')}/>
                {formik.errors.email && formik.touched.name ? (
                    <Text style={styles.error}>{formik.errors.email}</Text>
                ) : []}

            <Button name={'Add'} textColor={'#fff'} styleContainer={styles.button} onPress={() => {formik.handleSubmit();}}/>

        </View>
    );
};

export default StudentAdd;
