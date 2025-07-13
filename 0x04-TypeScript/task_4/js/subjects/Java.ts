/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
namespace Subjects{
    
    export interface Teacher {
        experienceTeachingJava? : number;
    }

    export class Java extends Subject{

        getRequirements() : string {
            return "Here is the list of requirements for Java"
        }

        getAvailableTeacher(teacher : Teacher) : string {
            if(teacher.experienceTeachingJava === undefined || teacher.experienceTeachingJava <= 0){
                return "No available teacher"
            }
            else {
                return `Available Teacher:${teacher.firstName}`
            }
        }
    }
}
