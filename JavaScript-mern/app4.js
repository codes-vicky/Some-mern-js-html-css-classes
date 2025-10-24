//Reduce

//the reduce method is one of the most powerfull
// array method is use to reduce an array to single output

//array.reduce(callback(accumulator,currentvalue,currentindex,array),initialvalue)
//callback: a function that executes on each element of the array it accepts the following arguements
//1. accumulator: the value is return after each iteration 
//2. Currentvalue: the current value proceed
//3. current index: current index of current value
// array: the array on which reduce function called;
//basic example of reduce

// let numbers=[1,2,3,4,5,6];
// let sum = numbers.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue;

// },0);
// console.log(sum);

// let nestedarray=[[1,2],[3,4],[5,6]];
// let flaternarray=nestedarray.reduce((acc,value)=>{
//     return acc.concat(value)
// },[]);
// // let flaternarray=nestedarray.reduce((acc,value)=>
// //     acc.concat(value),[]
// // );
// console.log(flaternarray);


//count how many times each element showed
// let fruits=['apple','banana','orange','apple','banana','mango','apple','orange','watermelon','orange'];
// let fruitcount=fruits.reduce((acc,fruit)=>{
//     acc[fruit]=(acc[fruit]||0)+1;
//     return acc;
// },{})
// console.log(fruitcount);

// let numbers=[1,2,3,4,2,1,6,4];
// let numbercount=numbers.reduce((acc,val)=>{
//     acc[val]=(acc[val]||0)+1;
//     return acc;
// },{})
// console.log(numbercount);

//finding maximum in an array

// let numbers=[5,3,6,43,89,54,3,90,32,101];
// let max=numbers.reduce((acc,curr)=>
//     (curr>acc?curr:acc),0
// );
// console.log(max);
// let numbers=[5,3,6,43,89,54,3,90,32,101];
// let max=numbers.reduce((acc,curr)=>
//     (curr>acc?acc:curr) 
// );
// console.log(max);

