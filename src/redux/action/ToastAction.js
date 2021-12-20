import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { getAllStudentAction } from './StudentAction';
import { SET_TOAST, TOAST_ON } from './type/LoadingType';

export const showToastAction = () => {
    return async (dispatch) => {
        dispatch({
            type: TOAST_ON,
            // toast: {
            //     type: 'success',
            //     // text1: 'Delete Successfully',
            //     onShow: () => {dispatch(getAllStudentAction());},
            // },
        });
        Toast.show({
            type: 'success',
            text1: 'Delete Successful',
            onShow: () => {dispatch(getAllStudentAction());},
        });
    };
};
