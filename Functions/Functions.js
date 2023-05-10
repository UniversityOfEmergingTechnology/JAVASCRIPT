// function print(){
//     // block of code
//     console.log("Mudit Kapoor")
// }

function add(firstNum,secondNum){
    // z has function scope
    // if you use var keyword also still we cannot access values declared inside function block
    // local variables can be only accessed inside the function block
    let z = firstNum+secondNum;
    return z;
}
// invoking a function
// the code inside the function will execute when something invokes the functio
// print();
// print();
// print();
// print();
// print();
// print();
let z =2;
let v=5;
add(z,v);
console.log(add(7,9))
// let a = 2;
// let b = 3;

// add(a,b);
// add(5,7);