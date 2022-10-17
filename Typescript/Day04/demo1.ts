//data types
//number(int,long,short,double,float),string(''/""),boolean(true/false),
//any(number,string,boolean),
//void => neutral data type . it doesn't point any thing 
//misec. => null & undefined => it acts as value as well as data type

var a1:number=10;   // Forward declaration & defination
// console.log("Value of a1 is "+a1);
var a2!:number;
// console.log('Value of a2 is '+a2);
var a3!:string;
// console.log(`Value of a3 is ${a3} `);

var a4:any;
a4=2.5;
// console.log("a4 value is "+a4)
a4='Sumit';
// console.log("a4 value is "+a4)
a4=true;
// console.log("a4 value is "+a4)

// var a5=4569873;
// console.log(`Value of a5 is ${a5}`)

// Literal 
  var a6:51|string;
 a6='Sumit raokhande';
//  console.log('Value of a6 is '+a6)
 a6=51;
//  console.log('Value of a6 is '+a6)

//Type assertion
var a7:any;
//1 angle bracket 
//2 as syntax

//1 angle bracket 
  var temp=(<string> a7);
  // temp.

  //2 as syntax

  var temp=(a7 as string);
  // temp.