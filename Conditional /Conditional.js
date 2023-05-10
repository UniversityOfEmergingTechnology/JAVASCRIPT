// if and else if and else
// let age  = 20;

// // if keyword specifies a block of code to be executed if condition is true

// if(age > 30){
//     // specify our block of code
//     console.log("You are too old  to drive")
// }
// else if(age > 18){
//     console.log("You can drive")
// }
// // else if statement is used to specify a new condition if first or conditions above else if are false
// else if(age == 18){
//     // specify our code
//     console.log("You are just 18 years old")
// }
// // else specify a block of code to be executed if same condition is false
// else{
//     console.log("You are not allowed to drive")
// }


// when javascript reaches a break keyword this will just stop the execution inside the switch block 
// if we omit break statement all cases beneath that case will be executed even if our expressions does not match
// default keyword just specifies the code to run if there is no case match
switch(1){

    case 1 : console.log("Today is Monday")
    break
    case 2 : console.log("Today is tuesday");
    break
    case 3 : console.log("Today is wednesday");
    break
    default : console.log("This is my default");
    break

}

