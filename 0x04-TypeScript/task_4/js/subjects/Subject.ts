namespace Subjects {

    export class Subject {
        teacher : Teacher
    
        setTeacher(teacher : Teacher) : void {
            this.teacher = teacher
        }

        getTeacher(): Teacher {
            return this.teacher;
        }
    }
}
