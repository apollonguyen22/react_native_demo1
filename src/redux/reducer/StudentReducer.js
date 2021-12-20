import {GET_ALL_STUDENT, ADD_STUDENT, RESET} from '../action/type/StudentType';

const stateDefault = {
    success: false,
    arrStudent: [],
};

export const StudentReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ALL_STUDENT: {
            state.arrStudent = action.arrStudent;
            return {...state};
        }
        case ADD_STUDENT: {
            state.success = true;
            return {...state};
        }
        case RESET: {
            state.success = false;
            return {...state};
        }
        default: return {...state};
    }
};
