// let newPromise = new Promise(function(resolve,reject){
//     // async operation
//     setTimeout(function(){
//         console.log("I am inside my promise object")
//     },5000)
//     // result of the operation
//     resolve("Hi This code executed properly")
//     // reject(new Error("Hi Your code was not able to execute properly"))
// }).then((value)=>console.log(value))
// .catch((error)=>console.log(error))

// chaining some asynchronous operations

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Inside promise 1 setTimeout function")
//     },2000)
//     // resolve("Executed successfully first promise")
//     reject(new Error("Sorry cannot go to second promise"))
// }).then((value) => {
//     console.log(value)
//     let promise2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Inside promise 2 settimeout function")
//         },3000);
//         resolve("Executed Succesfully second promise")
//     }).then((value)=>console.log(value))
// })
// .catch((e)=>console.log(e))


// two different ways to handle asynchronous operations in js
// promise chaining 
// async/await keyword


// async -  a function marked as async will always return a promise
// await- can be used to wait for the result of a primse before proceeding with the next line of code

// fetch function is modern promise based api for making network requests. it is used to send http requests to a server and retrieve response from it

// getting a resource using api 
async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json();
    return data;
}
// json stands for javascript object notation
fetchData()
    .then(data => console.log(data))
    .catch(error => console.log(error))

console.log("Mudit1")
console.log("Mudit2")
console.log("Mudit3")
console.log("Mudit4")
console.log("Mudit5")

// creating a resource
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Mudit',
    body: 'This is my body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.text())
  .then((json) => console.log(json))
  .catch(error => console.log(error));