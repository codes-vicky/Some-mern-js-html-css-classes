// creating array many ways
// Array : collection of data types

// let arr=[1,2,3,4];     //Literal Notation
// let arr1=new Array(5);  //array declaration as a constructor

//let arr3=new Array(1,2,3);

//accessing element
// Array elements are using indexedDB, start from 0

// let arr=['a','b','c'];

// console.log(arr[0]);
// console.log(arr[2]);

// 3. common  array method
// push(); add elemnt to the end in array

// let arr=['a','b','c'];
// arr.push('d');
// console.log(arr);


//pop(); Remove the last elemnt
// let arr=['a','b','c'];
// arr.pop();

// console.log(arr);

//Shift(); Remove the first elemnt of array

// let arr=['a','b','c'];
// arr.shift();
// console.log(arr);

//unshift(); Add element in start of array
// let arr=['a','b','c'];
// arr.unshift('d','e');
// console.log(arr);

//splice(); Adds or remove elemnt from array

// let arr=['a','b','c','k','y','i'];
// arr.splice(1,2);
// //arr.splice(1,0,'x','y','k')
// console.log(arr);

//slice(); 
// let arr=['a','b','c','d'];
// let sliced=arr.slice(1,2);
// console.log(sliced);

// Iterating Over Arrays

// for loop
// for each loop

// let arr=[2,1,8,7,4];
// // for (let i=0;i<arr.length;i++){
// //     console.log(arr[i]);
    
// // }

// //for each 
// arr.forEach(function(item,index){
//     console.log(item);
    
// })

// const arr =[
//     {
//         name: "Johan", age: "23",class:"5"
//     },
//     {
//         name: "Ayush", age: "21",class:"8"
//     },
//     {
//         name: "Ved", age: "25",class:"9"
//     },
// ]


// arr.forEach(function(item,index){
//     console.log(item);
//     console.log(item.name,item.age,item.class);
    
// })

//Map();   return a new array based  result for element

 //let arr=['a','a','a','a '];
// let newarr=arr.map(item=>item.toUpperCase());

// console.log(newarr);

//filter(); it gives new array based result according to the condition
// let filteredArray=arr.filter(item=>item!=='b');

// console.log(filteredArray);

//find(); 
// let found=arr.find(item=>item=='c');
// console.log(found);

//some();
// let some=arr.some(item=>item==="z");
// console.log(some);

// every()
// let every=arr.every(item=>item==='a');
//  console.log(every);

//sort()

// let number=[1,3,54,5,6,2];
//let aar=['r','a','y','j']
// number.sort();
// console.log(number);
// aar.sort();
// console.log(aar);
// aar.reverse();
// console.log(aar);




// let [first,second,third]=aar;
// console.log(third);
