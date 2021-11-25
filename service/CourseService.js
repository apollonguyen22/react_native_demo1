import { baseService } from './baseService';


export class CourseService extends baseService {
    constructor() {
        super();
    }

    getAllCourseService = () => {
        return this.get('course/all');
    }

    deleteCourseSerivice = (id) => {
        return this.delete(`/course/${id}`);
    }

    addCourseService = (course) => {
        return this.post('/course/add',course);
    }

    updateService = (course) => {
        return this.put('/course/update',course);
    }
}

export const courseService = new CourseService();
