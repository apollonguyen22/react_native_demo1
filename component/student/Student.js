/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, Text, LogBox, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentAction, getAllStudentAction } from '../../redux/action/StudentAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../../assets/style/student/StudentStyle';
import Button from '../../component_item/button/Button';

const Student = ({navigation}) => {

    const dispatch = useDispatch();
    const {arrStudent} = useSelector(state => state.StudentReducer);

    const getStudent = () => {
        dispatch(getAllStudentAction());
    };

    useEffect(() => {
        getStudent();
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []);

    const deleteStudent = (id) => {
        dispatch(deleteStudentAction(id));
    };

    return (
        <View>
            <Text style={styles.title}>Student List</Text>
            <FlatList data={arrStudent}
                renderItem={({item}) => <View style={styles.list}>
                    <Text style={styles.listItem}>{item.name}</Text>
                    <View style={styles.listIcon}>
                        <Icon name="edit" size={30} style={styles.edit} color="blue" onPress={() => navigation.navigate('StudentDetail', {item})}/>
                        <Icon name="trash" size={30} color="red" onPress={() => {deleteStudent(item.id);}}/>
                    </View>
                </View>}
            />

            <Button name={'Add new'} textColor={'#fff'} styleContainer={styles.button} onPress={() => navigation.navigate('StudentAdd')}/>

        </View>
    );
};

export default Student;
