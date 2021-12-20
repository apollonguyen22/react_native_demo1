import { studentService } from '../../service/StudentService';
import { ADD_STUDENT, DELETE_STUDENT, GET_ALL_STUDENT, RESET, UPDATE_STUDENT } from './type/StudentType';
import { showLoading, resetTypeLoadingToast, showToast } from './LoadingAction';
import { SET_TOAST } from './type/LoadingType';

export const getAllStudentAction = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        await studentService.getAllStudentService().then((res) => {
            dispatch({
                type: GET_ALL_STUDENT,
                arrStudent: res.data,
            });
        }).catch((err) => {
            dispatch({
                type: SET_TOAST,
                toast: {type: 'error', text1: 'Lỗi get danh sách studnet'},
            });
            console.log('err: ',err);
        }).finally(() => {
            dispatch(resetTypeLoadingToast());
        });
    };
};

export const deleteStudentAction = (id) => {
    return async (dispatch) => {
        await studentService.deleteStudentService(id).then((res) => {
            dispatch({
                type: DELETE_STUDENT,
                arrStudent: res.data,
            });
            dispatch(showToast({
                type: 'success',
                text1: 'Deleted',
                onShow: () => {dispatch(getAllStudentAction());},
            }));
        }).catch((err) => {
            console.log('err: ',err);
        });
    };
};

export const updateStudentAction = (student) => {
    return async (dispatch) => {
        await studentService.updateStudentService(student).then((res) => {
            dispatch({
                type: UPDATE_STUDENT,
                arrStudent: res.data,
            });
        }).catch((err) => {
            console.log('err: ',err);
        }).finally(() => {
            dispatch(getAllStudentAction());
        });
    };
};

export const addStudentAction = (student) => {
    return async (dispatch) => {
        await studentService.addStudentService(student).then((res) => {
            dispatch({
                type: ADD_STUDENT,
                arrStudent: res.data,
            });
        }).catch((err) => {
            console.log('err: ',err);
        }).finally(() => {
            dispatch(getAllStudentAction());
            dispatch({
                type: RESET,
            });
        });
    };
};
