//shallow copy & deep copy (js interview question)

let a=10;
let b=a;
// console.log("Value of a "+a);
// console.log("Value of b "+b);

b=20;
// console.log("-----------------------")
// console.log("Value of a "+a);
// console.log("Value of b "+b);
//by default variable is deep copy 

//Array
//by default array is shallow copy 

// let arr:number[]=[9,3,58,6];
// let arr1=arr;
// console.log("Arr array is "+arr);
// console.log("Arr1 array is "+arr1);
// console.log("-----------------------")
// arr1[0]=200;
// console.log("Arr array is "+arr);
// console.log("Arr1 array is "+arr1);



//Make array as deep copy

let arr=[2,5,7,11];
let [...arr1]=arr;
console.log("Arr array is "+arr);
console.log("Arr1 array is "+arr1);
console.log("-----------------------")

arr1[0]=400;
console.log("Arr array is "+arr);
console.log("Arr1 array is "+arr1);





