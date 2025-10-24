// sync,
// async

// console.log(1);
// console.log(2);
// console.log(3);

// function hello(){
//     console.log("DigiCoders");
    
// }
// setTimeout(hello,2000);
// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("Hello DigiCoder");
    
// },5000); 
// console.log("three");
// console.log("four");

// callback
// a callback function is a passed as an argument to another function
// function sum(a,b){
//     console.log(a+b);
    
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }

// calculator(5,2,sum)

// function mult(a,b){
//     console.log(a*b);
    
// }
// function calc(a,b,multcallback){
//     multcallback(a,b);
// }
// calc(5,2,mult);

//Promises;
// Promises is for 'eventual'completion of task
//it is an object in js it is solution of
//callback hell
// let Promises = new Promise((resolve,reject) => {
//     console.log("I am Promise");
    
// });

// const getPromise=()=>{
//   return  new Promise((resolve,reject)=>{
//         console.log("I am Promise");
//         //resolve("Success")
//         reject("Uncaught Error")
//     });
// };
// let promise = getPromise();
// promise.then((res)=>{
//    // console.log("Promise Fullfill",res);
    
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
    
// })

// Async-Await
// async function is always returns a Promise

// async function myFunc(){

// }

function api(){
    return new Promise((resolve)=>{
setTimeout(()=>{
    const names =["Rahul","Sumesh","Ved","Annu","Ayush"];
    const randomName=names[Math.floor(Math.random()*names.length)];
    resolve(randomName);
    
},2000);
    });
}
async function getWeatherData(){
    for(let i=0;i<5;i++){
 const name=   await api();
 console.log(`Name:${name}`);
 
}  
}
getWeatherData();
