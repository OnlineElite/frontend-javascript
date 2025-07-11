////////////////////// Task 0 //////////////////////////
interface Student {
    firstName : string
    lastName : string
    age : number
    location  : string

}

const student1 : Student = {
    firstName : "Jamal",
    lastName : "Boujbari",
    age : 28,
    location : "Casablanca"
}

const student2 : Student = {
        firstName : "Reda",
        lastName : "Allam",
        age : 31,
        location : "Bouskoura"
    }

const studentsList : Student[]= [student1, student2]

const table = document.createElement("table")

studentsList.forEach((student) => {
    const row = document.createElement("tr")

    const nameCell = document.createElement ("td")
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td")
    locationCell.textContent = student.location;

    row.appendChild(nameCell)
    row.appendChild(locationCell)

    table.appendChild(row)
})

document.body.appendChild(table)
