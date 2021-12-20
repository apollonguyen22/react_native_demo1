/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentAction } from '../../redux/action/StudentAction';
import * as Yup from 'yup';
import { styles } from '../../../assets/style/student/StudentAddStyle';
import Button from '../../components/button/Button';
import Input from '../../components/input_text/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';

const StudentAdd = ({navigation}) => {

    const dispatch = useDispatch();
    const {success} = useSelector(state => state.StudentReducer);
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
        },
    });

    useEffect(() => {
        if (success) {
            Toast.show({
                type: 'success',
                text1: 'Thêm mới thành công',
                onShow: navigation.navigate('Student'),
            });
        }
    }, [success, navigation, dispatch]);

    return (
        <View>
            <Text style={styles.title}>Add Student</Text>
            <View>
                <Icon name="user" size={20} style={styles.iconId}/>
                <Input styleContainer={styles.input} placeholder="Student Name" value={formik.values.name} onChangeText={formik.handleChange('name')}/>
                    {formik.errors.name && formik.touched.name ? (
                        <Text style={styles.error}>{formik.errors.name}</Text>
                    ) : []}
            </View>

            <View>
                <Icon name="envelope" size={20} style={styles.iconEmail}/>
                <Input keyboardType="email-address" styleContainer={styles.input} placeholder="Email" value={formik.values.email} onChangeText={formik.handleChange('email')}/>
                    {formik.errors.email && formik.touched.name ? (
                        <Text style={styles.error}>{formik.errors.email}</Text>
                    ) : []}
            </View>

            <Button name={'Add'} textColor={'#fff'} styleContainer={styles.button} onPress={() => {formik.handleSubmit()}}/>

        </View>
    );
};

export default StudentAdd;
