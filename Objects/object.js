// 1st way
// this keyword is a reference variable which helps us to refer our current object
// let student = {
//     firstName : "Chirag",
//     lastName : "Kapoor",
//     RollNum : "1357",
//     print :function(){
//         console.log(this.firstName)
//     }
// }
// we can access our properties of object in two ways
// console.log(student.firstName)
// console.log(student.RollNum)
// console.log(student.print())

// console.log(student["firstName"])

// new keyword in javascript is used to create an instance of an object that has constructor function

// 2nd way
// empty object
// let student = new Object();

// student.firstName = "Mudit";
// student.isOnLeave = false;

// console.log(student.isOnLeave)
// console.log(student["firstName"])


// 3rd way
function student(fN,lN,rn){
    this.firstName = fN,
    this.lastName = lN,
    this.rollNum = rn,
    this.details =function(){
        return this.firstName + " " + this.lastName + " " + this.rollNum;
    }
}


let newStudent = new student("Mudit" ,"Kapoor" , "1357" );
let newStudent1 = new student("Chirag" ,"Kalra" , "1430" );


console.log(newStudent.details())
console.log(newStudent1.details())