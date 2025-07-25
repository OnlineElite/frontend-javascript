/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
namespace Subjects{

    export interface Teacher{
        experienceTeachingC ? : number;
    }
    
    export class Cpp extends Subject {

        getRequirements() : string {
            return "Here is the list of requirements for Cpp"
        }

        getAvailableTeacher(teacher : Teacher) : string {
            if(teacher.experienceTeachingC === undefined || teacher.experienceTeachingC <= 0){
                return "No available teacher"
            }
            else {
                return `Available Teacher:${teacher.firstName}`
            }
        }
    }
}
