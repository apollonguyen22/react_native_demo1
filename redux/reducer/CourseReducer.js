import {GET_ALL_COURSE} from '../action/type/CourseType';

const stateDefault = {
    arrCourse: [],
};

export const CourseReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ALL_COURSE: {
            state.arrCourse = action.arrCourse;
            return {...state};
        }
        default: return {...state};
    }
};
