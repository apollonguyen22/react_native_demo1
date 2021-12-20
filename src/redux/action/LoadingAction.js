import { getAllStudentAction } from './StudentAction';
import { LOADING_OFF, LOADING_ON, RESET_LOADING_TOAST_TYPE, SET_LOADING, SET_TOAST } from './type/LoadingType';

export const displayLoadingAction = () => {
    return async (dispatch) => {
        dispatch({
            type: LOADING_ON,
            isLoading: true,
        });
    };
};

export const hideLoadingAction = () => {
    return async (dispatch) => {
        dispatch({
            type: LOADING_OFF,
            isLoading: false,
        });
    };
};

export const showLoading = () => {
    return async (dispatch) => {
        dispatch({
            type: SET_LOADING,
            loading: true,
        });
    };
};

export const showToast = ({type, text1, onShow}) => {
    return async (dispatch) => {
        dispatch({
            type: SET_TOAST,
            toast: {type, text1, onShow},
        });
    };
};

export const resetTypeLoadingToast = () => {
    return async (dispatch) => {
        dispatch({
            type: RESET_LOADING_TOAST_TYPE,
        });
    };
};
