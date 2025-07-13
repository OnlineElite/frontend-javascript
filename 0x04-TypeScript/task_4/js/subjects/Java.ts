namespace Subjects{
    
    export interface Teacher {
        experienceTeachingJava? : number;
    }

    export class React {

        getRequirements() : string {
            return "Here is the list of requirements for Java"
        }

        getAvailableTeacher(teacher : Teacher) : string {
            if(teacher && teacher.experienceTeachingJava !== undefined){
                return `Available Teacher:${teacher.firstName}`
            }
            else {
                return "No available teacher"
            }
        }
    }
}
