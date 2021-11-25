/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { View, Text, LogBox, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentAction, getAllStudentAction } from '../redux/action/StudentAction';
import Icon from 'react-native-vector-icons/FontAwesome';

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

    // const renderStudent = () => {
    //     return arrStudent.map((item) => {
    //         return <View style={styles.list} key={item.id}>
    //             <Text style={styles.listItem}>{item.courses.map((item2) => {
    //                 return <Text key={item2.id}>{item2.author}</Text>;
    //             })}</Text>
    //         </View>;
    //     });
    // };

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
            <View style={styles.button}>
                <Button title="Add new" onPress={() => navigation.navigate('StudentAdd')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontSize: 25,
    },
    listItem: {
        fontSize: 20,
        color: 'black',
        padding: 10,
    },

    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
    },

    listIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10,
        marginTop: 10,
    },

    button: {
        marginTop: 20,
        margin: 20,
    },

    edit: {
        marginRight: 5,
        marginTop: 2,
    },
});

export default Student;
