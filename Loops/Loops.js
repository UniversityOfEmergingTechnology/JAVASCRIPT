// expression 1 is executed before execution of code block
// expression 2 actually defines the condition for executing the code block
// expression 3 is executed every time after the code block has been executed

// for(let count = 1; count <= 5 ; count = count + 1){
//     // block of code
//     console.log(count)
// }

// console.log(count)


// for in loop actually helps us to loop through properties of an object

// let student ={
//     fname:"Mudit",
//     age:18,
//     lname:"Kapoor",
//     isOnLeave:false
// }

// for(let i in student){
//     // block of exectued
//     console.log(i + " " +student[i])
// }

// for in loop to iterate over array

// const numbers = [1,2,"Mudit" ,4,5];

// for(let key in numbers){
//     console.log(key + " "+numbers[key])
// }

// for of loop it allows us to loop through values of an iterable object

// for(let value of numbers){
//     console.log(value)
// }

// let myString = "My name is mudit kapoor"



// for(let value of student){
//     console.log(value)
// }

// for each() method which calls a function once for each array element

// numbers.forEach(printEach)

// function printEach(value,index,numbers){
//     console.log("My Current value  is " + " " + value + "My current index is " + index)
// }

// while
// let i = 5;
// while(i !== 0){
//     // block of code
//     console.log(i);
//     i--;
// }

// console.log("I am out of my while loop")

// do while loop
// do{
//     // executing our block of code first then checking the condition
//     console.log("I have executed my do while loop once");
// }while(true)