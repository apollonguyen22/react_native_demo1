/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteStudentAction } from '../../redux/action/StudentAction';
import { styles } from '../../../assets/style/modal/StudentModalStyle';

const StudentModal = (props) => {

    const dispatch = useDispatch();

    const closeModal = (bool) =>{
        props.changeVisible(bool);
    };

    const deleteStudent = (id) => {
        dispatch(deleteStudentAction(id));
        props.changeVisible(false);
    };

    return (
        <TouchableOpacity disabled={true} style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={[styles.text, {fontSize: 20}]}>Do you want to delete ?</Text>
                    <Text style={styles.text}>Student will be deleted</Text>
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => closeModal(false, 'Cancel')} style={styles.touchOpa}>
                        <Text style={[styles.text, {color: 'red'}]}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {deleteStudent(props.item.id);}} style={styles.touchOpa}>
                        <Text style={[styles.text, {color: 'blue'}]}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default StudentModal;
