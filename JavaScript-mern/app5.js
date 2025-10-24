// // //destructuring array
// // let fruits=['apple','mango','banana','orange'];
// // let [first,second,third]=fruits;
// // console.log(first);
// // console.log(second);
// // console.log(third);

// //skip elemnt
// let fruits=['apple','mango','banana','orange'];
// let [first, ,third,fifth='no fruits']=fruits;
// console.log(first);
// console.log(third);
// console.log(fifth);



//swapping variables using destructing
// let a=6,b=10;
// [a,b]=[b,a];
// console.log(b);
// console.log(a);

//rest
// let fruits=['apple','banana','mango'];
// let [first,...rest]=fruits;

// console.log(first);
// console.log(rest);

//clousers: it is a function to  access variables from outer scope even after outer function has returned

// function outerFunction(outervariables){
//     return function innerFunction(innervariables){
// console.log(`outer':${outervariables}`);

//     }

// }
// function outerFunction(outervariables){
//     return function innerFunction(innervariables){
// console.log(`outer':${outervariables}`);
// console.log(`inner':${innervariables}`);

//     }

// }

// const newFunction=outerFunction('outside');
// newFunction('inside');

//currying: currying is a process of to multiple arguements into a series of function that each take single arguement

// function multiple(a){
//     return function(b){
//         return function(c){
//             return function(d){
//             return a*b*c*d;
//         }
//         }
//     }
// }
// console.log(multiple(2)(3)(4)(5));



