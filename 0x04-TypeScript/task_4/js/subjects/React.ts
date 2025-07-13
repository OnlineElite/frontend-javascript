/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
namespace Subjects{
    
    export interface Teacher {
        experienceTeachingReact? : number;
    }

    export class React extends Subject{

        getRequirements() : string {
            return "Here is the list of requirements for React"
        }

        getAvailableTeacher(teacher : Teacher) : string {
            if(teacher.experienceTeachingReact === undefined || teacher.experienceTeachingReact <= 0){
                return "No available teacher"
            }
            else {
                return `Available Teacher:${teacher.firstName}`
            }
        }
    }
}
