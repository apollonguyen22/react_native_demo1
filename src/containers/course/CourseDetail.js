import { useFormik } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import {styles} from '../../../assets/style/course/CourseDetailStyle';
import Input from '../../components/input_text/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

const CourseDetail = ({route}) => {

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

    return (
        <View>
            <Text style={styles.title}>Course Detail</Text>

            <Icon name="id-badge" size={20} style={styles.iconId}/>
            <Input styleContainer={styles.input} value={formik.values.id.toString()} editable={false}/>

            <Icon name="leanpub" size={20} style={styles.iconName}/>
            <Input styleContainer={styles.input} placeholder="Course Name" value={formik.values.courseName} onChangeText={formik.handleChange('courName')} editable={false}/>

            <Icon name="user" size={20} style={styles.iconAuthor}/>
            <Input styleContainer={styles.input} placeholder="Course Name" value={formik.values.author} onChangeText={formik.handleChange('courName')} editable={false}/>

        </View>
    );
};

export default CourseDetail;
