import React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../../../assets/style/account/ProfileStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../../components/input_text/Input';
import { useSelector } from 'react-redux';

const Profile = () => {

    const {userLoginDetail} = useSelector(state => state.AccountReducer);


    return (
        <View>
            <Text style={styles.title}>Account Info</Text>

            <View>
                <Icon name="user" size={20} style={styles.iconName}/>
                <Input value={userLoginDetail[0].username} styleContainer={styles.input} placeholder="Username"/>
            </View>

            <View>
                <Icon name="envelope" size={20} style={styles.iconEmail}/>
                <Input value={userLoginDetail[0].email} styleContainer={styles.input} placeholder="Email"/>
            </View>

            <View>
                <Icon name="key" size={20} style={styles.iconEmail}/>
                <Input value={userLoginDetail[0].password} styleContainer={styles.input} placeholder="Password"/>
            </View>
        </View>
    );
};

export default Profile;
