////////////////////// Task 1 //////////////////////////
interface Teacher {
    readonly firstName : string;
    readonly lastName : string;
    fallTimeEmployee : boolean;
    yearsOfExperience? : number;
    location : string;
    [key : string] : any // Allows adding any other attribute
}

const Teacher1 : Teacher = {
    firstName : "Jamal",
    lastName : "Boujbari",
    fallTimeEmployee : true,
    location : "Bouskoura",
    contract : true,
}
console.log(Teacher1)

////////////////////// Task 2 //////////////////////////
interface Directors extends Teacher {
    numberOfReports : number;
}

const Director1 : Directors = {
    firstName : "Reda",
    lastName : "Allam",
    fallTimeEmployee : true,
    location : "Bouskoura",
    numberOfReports : 5,
}
console.log(Director1)

////////////////////// Task 3 //////////////////////////
interface PrintTeacherFunction {
    (firstName : string, lastName : string) : string;
}

const printTeacher : PrintTeacherFunction =  (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`
}

console.log(printTeacher("Jamal","Boujbari"))

////////////////////// Task 4 //////////////////////////

interface StudentClassInterface{
    workOnHomeWork() : string;
    displayName() : string;
}
interface StudentConstructor{
    firstName : string;
    lastName : string;
}
class StudentClass implements StudentClassInterface{
    private firstName : string;
    private lastName : string;
    constructor(args : StudentConstructor ){
        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }

    public workOnHomeWork() : string {
        return "Currently working"
    }

    public displayName() : string {
        return this.firstName
    }
}
