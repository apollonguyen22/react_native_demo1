/* eslint-disable no-alert */
import {courseService} from '../../service/CourseService';
import {ADD_COURSE, DELETE_COURSE, GET_ALL_COURSE, UPDATE_COURSE} from './type/CourseType';

export const getAllCourseAction = () => {
    return async (dispatch) => {
        try {
            const result = await courseService.getAllCourseService();

            dispatch({
                type: GET_ALL_COURSE,
                arrCourse: result.data,
            });
        } catch (e) {
            alert(e.message);
        }
    };
};

export const addCourseAction = (course) => {
    return async (dispatch) => {
        try {
            const result = await courseService.addCourseService(course);

            dispatch({
                type: ADD_COURSE,
                course: result.data,
            });
        } catch (e) {
            alert(e.message);
        }
    };
};

export const deleteCourseAction = (id) => {
    return async (dispatch) => {
        try {
            const result = await courseService.deleteCourseSerivice(id);

            dispatch({
                type: DELETE_COURSE,
                course: result.data,
            });
        } catch (e) {
            alert(e.message);
        }
    };
};

export const updateCourseAction = (course) => {
    return async (dispatch) => {
        try {
            const result = await courseService.updateService(course);

            dispatch({
                type: UPDATE_COURSE,
                course: result.data,
            });
        } catch (e) {
            alert(e.message);
        }
    };
};
