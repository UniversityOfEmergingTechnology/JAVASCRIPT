// we can use single or double quotes to declare my strings in javascript
let text = 'Mudit Kapoor'

console.log(text.length)

// slice(start , end)
// substring (start,end)
// substr(start,length)

// slice method extracts a part of a string. parameters include starting postion and ending position where ending position is not included
console.log(text.slice(1,5))
// if i omit second parameter javascript engine takes second parameter as length of the string by default

console.log(text.substring(5))

console.log(text.replace('Mudit' , "Chirag"))

console.log(text.toUpperCase())
console.log(text.toLowerCase())



// let stringObject  = new String("Chirag Kalra");
// console.log(typeof stringObject)
// console.log(stringObject)

// let myString = "Chirag Kalra"
// console.log(typeof myString)

// console.log (myString === stringObject)