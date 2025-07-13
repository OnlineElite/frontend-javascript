////////////////////// Task 5 //////////////////////////

// Interfaces
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

// Classes
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

// Factory function
type Employee = Director | Teacher;

function createEmployee(salary: number | string): Employee {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(420))

////////////////////// Task 6 //////////////////////////

// Type predicate function
function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined; // We suppose that the employee might be a Director, and we check if the function workDirectorTasks exists on the object Director
}

// Execution function
function executeWork(employee : Employee ) : string {
    if (isDirector(employee)){
        return employee.workDirectorTasks()
    }
    else {
        return employee.workTeacherTasks()
    }
}

console.log(executeWork(createEmployee(200)))
console.log(executeWork(createEmployee(1000)))


////////////////////// Task 7 //////////////////////////

type Subjects = "Math" | "History"

function teachClass(todayClass : Subjects) : string {
    if(todayClass == "Math"){
        return "Teaching Math"
    }
    else{
        return "Teaching History"
    }
}

console.log(teachClass("Math"))