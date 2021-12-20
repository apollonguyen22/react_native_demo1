import { RESET_LOADING_TOAST_TYPE, SET_LOADING, SET_TOAST } from '../action/type/LoadingType';

const stateDefault = {
    loading: null,
    toast: null,
};

export const LoadingToastReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_LOADING: {
            state.loading = action.loading;
            return {...state};
        }

        case SET_TOAST: {
            state.toast = action.toast;
            return {...state};
        }

        case RESET_LOADING_TOAST_TYPE: {
            state.loading = null;
            state.toast = null;
            return {...state};
        }

        default: return {...state};
    }
};
