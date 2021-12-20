import { baseService } from './baseService';


export class StudentService extends baseService {
    constructor() {
        super();
    }

    getAllStudentService = () => {
        return this.get('student/all');
    }

    deleteStudentService = (id) => {
        return this.delete(`student/${id}`);
    }

    addStudentService = (student) => {
        return this.post('student/add',student);
    }

    updateStudentService = (student) => {
        return this.put('student/update',student);
    }
}

export const studentService = new StudentService();
