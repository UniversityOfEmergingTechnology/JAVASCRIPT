// this was my first method
// const cars = ["Mercedes" , "Lambo" , "Ford" ,"Ferrari" ]
// console.log(cars)
// console.log(cars[1])


// this is my second method
// const cars = new Array();
// cars[0] = "Mercedes"
// cars[1] = "Ford"
// cars[2] = "Ferrari"

// console.log(cars)

// this is my third method
// by passing argumests in constructor
// const names = new Array("Mudit" , "Chirag" ,"Ram" , "Debarun");

// console.log(names[2])
// console.log(names)


// console.log(names.length)

// looping in arrays
// for(let i =0;i<names.length;i++){
//     console.log(names[i])
// }
// changing value in arrays
// names[3] = "Dilpreet"
// names.forEach(printArrayValue)
// function printArrayValue(value){
//     console.log(value)
// }

var objectMudit= {
    firstName : "Mudit",
    lastName : "Kapoor"
}
objectMudit["firstName"]

// adding values inside my array
var numbers = [1,2,3,4]
numbers.push(5)
numbers.push(6)
console.log(numbers)

numbers[0]

console.log(typeof numbers)
console.log(typeof objectMudit)

// it tells me whether particular variable is array or not
// console.log(Array.isArray(numbers))

// console.log(numbers instanceof Array)


// toString method converts my array to string
console.log(numbers.toString())
console.log(typeof numbers.toString())
console.log(typeof numbers)

// join method helps to join all array elements into string where you can also define your separator
console.log(numbers.join("a"))

// remove the last values from the array
// numbers.pop()
// numbers.pop()
// console.log(numbers)

// splice()
// first parameter defines position where new elements should be added
// second parameter defines how many elements should be removed
//rest of parameters defines new elements to be added
// console.log(numbers)
// numbers.splice(2,0,10,11,12,13)
// console.log(numbers)

// remove elements from array using splice method
// numbers.splice(2,1)
// console.log(numbers)
// numbers.splice(3,1)
// console.log(numbers)


// slice method
console.log(numbers)
// two parameters first index to last index where last index's value is not included
const subNumbers = numbers.slice(1)
console.log(subNumbers)
console.log(numbers)
console.log(numbers.reverse())
console.log(numbers.includes(7))
