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
    job : "it"
}
console.log(Teacher1)