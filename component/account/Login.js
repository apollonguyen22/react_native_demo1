/* eslint-disable react-native/no-inline-styles */
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Yup from 'yup';
import {styles} from '../../assets/style/account/LoginStyle';
import Button from '../../component_item/button/Button';
import Input from '../../component_item/input_text/Input';

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
                <Input styleContainer={styles.inputUserName} value={formik.values.username} placeholder="Username" onChangeText={formik.handleChange('username')}/>
                    {formik.errors.username && formik.touched.username ? (
                        <Text style={styles.error}>{formik.errors.username}</Text>
                    ) : []}
            </View>

            <View style={styles.inputView}>
                <Icon style={styles.iconInputUser} name="key" size={20}/>
                <Input styleContainer={styles.inputPassword} value={formik.values.password} onChangeText={formik.handleChange('password')} secureTextEntry={show.secure} placeholder="Password"/>
                <Icon style={styles.iconPass} name={show.icon} size={25} onPress={onIconPress}/>
                    {formik.errors.password && formik.touched.password ? (
                        <Text style={styles.error}>{formik.errors.password}</Text>
                    ) : []}
            </View>

            <Text style={styles.forgot}>Forgot Password?</Text>

            <Button name={'Sign in'} textColor={'#fff'} styleContainer={styles.signin} onPress={() => {formik.handleSubmit();}}/>

            <View style={styles.textSignup}>
                <Text>Don't have an Account? </Text>
                <Text onPress={() => {navigation.navigate('Signup');}} style={{color: '#7c42ff',fontWeight: 'bold'}}>Sign up</Text>
            </View>

            <View>
                <Icon style={styles.iconFB} name="facebook-square" color="white" size={23}/>
                <Button name={'Continue with Facebook'} textColor={'#fff'} styleContainer={styles.facebook}/>
            </View>

            <View>
                <Icon style={styles.iconFB} name="google" size={23}/>
                <Button name={'Continue with Google'} textColor={'gray'} styleContainer={styles.google}/>
            </View>

            <Text style={{color: '#7c42ff', textAlign: 'center', marginTop: 5, fontWeight: 'bold'}}>Try another way</Text>
        </ScrollView>
    );
};

export default Login;
