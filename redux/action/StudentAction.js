/* eslint-disable no-alert */
import { studentService } from '../../service/StudentService';
import { ADD_STUDENT, DELETE_STUDENT, GET_ALL_STUDENT, UPDATE_STUDENT } from './type/StudentType';

export const getAllStudentAction = () => {
    return async (dispatch) => {
        try {
            const result = await studentService.getAllStudentService();

            dispatch({
                type: GET_ALL_STUDENT,
                arrStudent: result.data,
            });

            // const a = JSON.stringify(result.data);
            // console.log(a);
        } catch (e){
            alert(e.message);
            console.log('error',e.message);
        }
    };
};

export const deleteStudentAction = (id) => {
    return async (dispatch) => {
        try {
            const result = await studentService.deleteStudentService(id);

            dispatch({
                type: DELETE_STUDENT,
                arrStudent: result.data,
            });
            dispatch(getAllStudentAction());
            alert('Delete Success');
        } catch (e){
            alert(e.message);
        }
    };
};

export const updateStudentAction = (student) => {
    return async (dispatch) => {
        try {
            const result = await studentService.updateStudentService(student);

            dispatch({
                type: UPDATE_STUDENT,
                student: result.data,
            });
            dispatch(getAllStudentAction());
            alert('Update Success');
        } catch (e){
            alert(e.message);
        }
    };
};

export const addStudentAction = (student) => {
    return async (dispatch) => {
        try {
            const result = await studentService.addStudentService(student);

            dispatch({
                type: ADD_STUDENT,
                student: result.data,
            });
            dispatch(getAllStudentAction());
            alert('Add Success');
        } catch (e) {
            alert(e.message);
        }
    };
};
