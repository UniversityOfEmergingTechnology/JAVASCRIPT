// try block defines a code block to run (to try)
// catch statement defines a code block to handle any error
// throw statement actually allows you to define a custom error message
// finally block defines a code block to run regardless of result

{
    let text = "My Name"
}

try{
    var x = 9;
    if(x<10)
        throw 10;
}
catch(error){
    console.log(error)
}
finally{
    console.log("We have handled the exception")
}

console.log(x)

// implementing some functionality here
console.log("My name")