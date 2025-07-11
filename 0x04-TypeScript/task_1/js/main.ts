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

interface printTeacherFunction {
    (firstName : string, lastName : string) : string;
}

const printTeacher : printTeacherFunction =  (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`
}

console.log(printTeacher("Jamal","Boujbari"))

