/* eslint-disable react-native/no-inline-styles */
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Yup from 'yup';

const Login = ({navigation}) => {

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
            password: '',
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required('Required!!!'),
            password: Yup.string().required('Required!!!'),
        }),
        onSubmit: (values) => {
            navigation.navigate('StudentHome');
        },
    });

    return (
        <ScrollView>
            <View style={styles.title}>
                <Text style={styles.textTitle}>Hello </Text>
                <Text style={[styles.textTitle,{color: '#7c42ff'}]}>there !</Text>
            </View>

            <Text style={{marginLeft: 20}}>Sign in to continue</Text>

            <View style={styles.inputView}>
                <Icon style={styles.iconInputUser} name="user" size={20}/>
                <TextInput value={formik.values.username} onChangeText={formik.handleChange('username')} style={styles.inputUserName} placeholder="Username"/>
                    {formik.errors.username && formik.touched.username ? (
                        <Text style={styles.error}>{formik.errors.username}</Text>
                    ) : []}
            </View>

            <View style={styles.inputView}>
                <Icon style={styles.iconInputUser} name="key" size={20}/>
                <TextInput value={formik.values.password} onChangeText={formik.handleChange('password')} secureTextEntry={show.secure} style={styles.inputPassword} placeholder="Password"/>
                <Icon style={styles.iconPass} name={show.icon} size={25} onPress={onIconPress}/>
                    {formik.errors.password && formik.touched.password ? (
                        <Text style={styles.error}>{formik.errors.password}</Text>
                    ) : []}
            </View>

            <Text style={styles.forgot}>Forgot Password?</Text>

            <TouchableOpacity style={styles.signin} onPress={() => {formik.handleSubmit();}}>
                <Text style={styles.textSignin}>Sign in</Text>
            </TouchableOpacity>

            <View style={styles.textSignup}>
                <Text>Don't have an Account? </Text>
                <Text onPress={() => {navigation.navigate('Signup');}} style={{color: '#7c42ff',fontWeight: 'bold'}}>Sign up</Text>
            </View>

            <View>
                <Icon style={styles.iconFB} name="facebook-square" color="white" size={23}/>
                <TouchableOpacity style={styles.facebook}>
                    <Text style={styles.textSignin}>Continue with Facebook</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Icon style={styles.iconFB} name="google" size={23}/>
                <TouchableOpacity style={styles.google}>
                    <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>Continue with Google</Text>
                </TouchableOpacity>
            </View>

            <Text style={{color: '#7c42ff', textAlign: 'center', marginTop: 5, fontWeight: 'bold'}}>Try another way</Text>
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
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
    },

    inputPassword: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 20,
        paddingLeft: 40,
        paddingTop: 20,
        paddingBottom: 20,
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

    forgot: {
        marginTop: 10,
        fontSize: 15,
        display: 'flex',
        alignSelf: 'flex-end',
        marginRight: 20,
    },

    signin: {
        backgroundColor: '#8e6aff',
        padding: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 29,
        borderRadius: 27,
    },

    textSignin: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    textSignup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        fontSize: 20,
    },

    facebook: {
        backgroundColor: '#3b5998',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 27,
        marginTop: 45,
    },

    google: {
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 27,
        marginTop: 10,
    },

    iconFB: {
        marginLeft: 30,
        position: 'absolute',
        bottom: 14,
        left: 25,
        zIndex: 100,
    },

    error: {
        color: 'red',
        marginLeft: 25,
        position: 'absolute',
        bottom: -20,
        zIndex: 100,
    },
});

export default Login;
