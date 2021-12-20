import { LOADING_OFF, LOADING_ON } from '../action/type/LoadingType';

const stateDefault = {
    isLoading: false,
};

export const LoadingReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LOADING_ON: {
            state.isLoading = action.isLoading;
            return {...state};
        }

        case LOADING_OFF: {
            state.isLoading = action.isLoading;
            return {...state};
        }

        default: return {...state};
    }
};
