import {GET_ALL_STUDENT} from '../action/type/StudentType';

const stateDefault = {
    arrStudent: [],
};

export const StudentReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ALL_STUDENT: {
            state.arrStudent = action.arrStudent;
            return {...state};
        }
        default: return {...state};
    }
};
