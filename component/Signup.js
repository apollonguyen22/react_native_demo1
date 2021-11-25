/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {signupAction} from '../redux/action/AccountAction';

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
            dispatch(signupAction(values));
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
                <TextInput value={formik.values.username} onChangeText={formik.handleChange('username')} style={styles.inputUserName} placeholder="Username"/>
                    {formik.errors.username && formik.touched.username ? (
                        <Text style={styles.error1}>{formik.errors.username}</Text>
                    ) : []}
            </View>

            <View style={styles.inputView}>
                <Icon style={styles.iconInputUser} name="envelope" size={20}/>
                <TextInput value={formik.values.email} onChangeText={formik.handleChange('email')} style={styles.inputEmail} placeholder="Email Address"/>
                    {formik.errors.email && formik.touched.email ? (
                        <Text style={styles.error}>{formik.errors.email}</Text>
                    ) : []}
            </View>

            <View style={styles.inputView}>
                <Icon style={styles.iconInputUser} name="key" size={20}/>
                <TextInput value={formik.values.password} onChangeText={formik.handleChange('password')} secureTextEntry={show.secure} style={styles.inputEmail} placeholder="Password"/>
                <Icon style={styles.iconPass} name={show.icon} size={25} onPress={onIconPress}/>
                    {formik.errors.password && formik.touched.password ? (
                        <Text style={styles.error}>{formik.errors.password}</Text>
                    ) : []}
            </View>

            <View style={styles.inputView}>
                <Icon style={styles.iconInputUser} name="key" size={20}/>
                <TextInput value={formik.values.confirmPassword} onChangeText={formik.handleChange('confirmPassword')} secureTextEntry={show.secure} style={styles.inputEmail} placeholder="Confirm Password"/>
                <Icon style={styles.iconPass} name={show.icon} size={25} onPress={onIconPress}/>
                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                        <Text style={styles.error}>{formik.errors.confirmPassword}</Text>
                    ) : []}
            </View>

            <TouchableOpacity onPress={() => {formik.handleSubmit();}} style={styles.signin}>
                <Text style={styles.textSignin}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.textFooterr}>Already have an account? </Text>
                <Text style={[styles.textFooterr,{color: '#7c42ff'}]} onPress={() => {navigation.navigate('Login');}}>Log in</Text>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 15,
    },

    textTitle: {
        fontSize: 35,
        fontWeight: 'bold',
    },

    inputView: {
        display: 'flex',
    },

    inputUserName: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 60,
        paddingLeft: 40,
        paddingTop: 18,
        paddingBottom: 18,
        paddingRight: 20,
    },

    inputEmail: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 20,
        paddingLeft: 40,
        paddingTop: 18,
        paddingBottom: 18,
        paddingRight: 20,
        marginTop: 20,
        marginRight: 20,
    },

    iconInputUser: {
        marginLeft: 30,
        position: 'absolute',
        bottom: 22,
        left: 5,
        zIndex: 100,
    },

    iconPass: {
        position: 'absolute',
        right: 0,
        top: 40,
        marginRight: 32,
    },

    signin: {
        backgroundColor: '#8e6aff',
        padding: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 65,
        borderRadius: 27,
    },

    textSignin: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center',
    },

    textFooterr: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    error: {
        color: 'red',
        marginLeft: 25,
        position: 'absolute',
        top: 83,
        zIndex: 100,
    },

    error1: {
        color: 'red',
        marginLeft: 25,
        position: 'absolute',
        top: 120,
        zIndex: 100,
    },

});

export default Signup;
