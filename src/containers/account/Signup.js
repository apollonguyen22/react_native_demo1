/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {signUpAction111} from '../../redux/action/AccountAction';
import { styles } from '../../../assets/style/account/SignupStyle';
import Button from '../../components/button/Button';
import Input from '../../components/input_text/Input';

const Signup = ({navigation}) => {

    const dispatch = useDispatch();

    const [show, setShow] = useState({
        secure: true,
        icon: 'eye-slash',
    });

    const onIconPress = () => {
        let icon = (show.secure) ? 'eye' : 'eye-slash';
        setShow({
            secure: !show.secure,
            icon: icon,
        });
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required('Required!!!'),
            email: Yup.string().required('Required!!!').email('Invalid email'),
            password: Yup.string().required('Required!!!'),
            confirmPassword: Yup.string().required('Required!!!').oneOf([Yup.ref('password')], 'Password do not match'),
        }),
        onSubmit: (values) => {
            // dispatch(signupAction(values));
            dispatch(signUpAction111(values));
            navigation.navigate('Login');
        },
    });

    return (
        <ScrollView>
            <View style={styles.title}>
                <Text style={styles.textTitle}>Sign </Text>
                <Text style={[styles.textTitle,{color: '#7c42ff'}]}>Up</Text>
            </View>

            <Text style={{marginLeft: 20}}>Enter your phone number below to</Text>
            <Text style={{marginLeft: 20}}>recive your password reset instruction</Text>

            <View style={styles.inputView}>
                <Icon style={styles.iconInputUser} name="user" size={20}/>
                <Input value={formik.values.username} onChangeText={formik.handleChange('username')} styleContainer={styles.inputUserName} placeholder="Username"/>
                    {formik.errors.username && formik.touched.username ? (
                        <Text style={styles.error1}>{formik.errors.username}</Text>
                    ) : []}
            </View>

            <View style={styles.inputView}>
                <Icon style={styles.iconInputUser} name="envelope" size={20}/>
                <Input value={formik.values.email} onChangeText={formik.handleChange('email')} styleContainer={styles.inputEmail} placeholder="Email Address"/>
                    {formik.errors.email && formik.touched.email ? (
                        <Text style={styles.error}>{formik.errors.email}</Text>
                    ) : []}
            </View>

            <View style={styles.inputView}>
                <Icon style={styles.iconInputUser} name="key" size={20}/>
                <Input value={formik.values.password} onChangeText={formik.handleChange('password')} secureTextEntry={show.secure} styleContainer={styles.inputEmail} placeholder="Password"/>
                <Icon style={styles.iconPass} name={show.icon} size={25} onPress={onIconPress}/>
                    {formik.errors.password && formik.touched.password ? (
                        <Text style={styles.error}>{formik.errors.password}</Text>
                    ) : []}
            </View>

            <View style={styles.inputView}>
                <Icon style={styles.iconInputUser} name="key" size={20}/>
                <Input value={formik.values.confirmPassword} onChangeText={formik.handleChange('confirmPassword')} secureTextEntry={show.secure} styleContainer={styles.inputEmail} placeholder="Confirm Password"/>
                <Icon style={styles.iconPass} name={show.icon} size={25} onPress={onIconPress}/>
                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                        <Text style={styles.error}>{formik.errors.confirmPassword}</Text>
                    ) : []}
            </View>

            <Button name={'Sign up'} textColor={'#fff'} styleContainer={styles.signup} onPress={() => {formik.handleSubmit();}}/>

            <View style={styles.footer}>
                <Text style={styles.textFooterr}>Already have an account? </Text>
                <Text style={[styles.textFooterr,{color: '#7c42ff'}]} onPress={() => {formik.handleSubmit();}}>Log in</Text>
            </View>

        </ScrollView>
    );
};

export default Signup;
