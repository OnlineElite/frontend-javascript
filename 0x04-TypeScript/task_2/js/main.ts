////////////////////// Task 5 //////////////////////////
interface DirectorInterface {

    workFromHome() : string;
    getToWork() : string;
    workDirectorTasks() : string;
}

interface TeacherInterface  {

    workFromHome() : string;
    getCoffeeBreak() : string;
    workTeacherTasks() : string;
}

class Director implements DirectorInterface {

    workFromHome() : string {
        return "Working from home"
    }
    getToWork() : string {
        return "Getting a coffee break"
    }
    workDirectorTasks() : string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {

    workFromHome() : string {
        return "Cannoot work from home"
    }
    getCoffeeBreak() : string {
        return "cannot have a breack"
    }
    workTeacherTasks() : string {
        return "getting to work"
    }
}

function createEmployee(salary : any){
    if(typeof salary === 'number' && salary < 500) {
        return Teacher
    }
    else{
        return Director
    }  
}

