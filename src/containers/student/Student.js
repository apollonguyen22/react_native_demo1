import React, { useEffect, useState } from 'react';
import { View, Text, LogBox, FlatList, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudentAction } from '../../redux/action/StudentAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../../../assets/style/student/StudentStyle';
import Button from '../../components/button/Button';
import StudentModal from '../modal/StudentModal';

const Student = ({navigation}) => {

    const [modalVisible,setModelVisible] = useState(false);

    const dispatch = useDispatch();
    const {arrStudent} = useSelector(state => state.StudentReducer);

    const changeVisible = (bool) => {
        setModelVisible(bool);
    };

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        dispatch(getAllStudentAction());
    }, [dispatch]);

    return (
        <View>
            <Text style={styles.title}>Student List</Text>
            <FlatList data={arrStudent}
                renderItem={({item}) => <View style={styles.list}>
                    <Text style={styles.listItem}>{item.name}</Text>
                    <View style={styles.listIcon}>
                        <Icon name="edit" size={30} style={styles.edit} color="blue" onPress={() => navigation.navigate('StudentDetail', {item})}/>
                        <Icon name="trash" size={30} color="red" onPress={() => {changeVisible(true, {item});}}/>
                    </View>
                    <Modal transparent={true} animationType="fade" visible={modalVisible} onRequestClose={() => changeVisible(false)}>
                        <StudentModal changeVisible={changeVisible} item={item}/>
                    </Modal>
                </View>}
            />

            <Button name={'Add new'} textColor={'#fff'} styleContainer={styles.button} onPress={() => navigation.navigate('StudentAdd')}/>

        </View>
    );
};

export default Student;
