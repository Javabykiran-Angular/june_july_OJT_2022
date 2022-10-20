//Splice method

let a:number[]=[3,56,12,9,8];
// console.log(a);
// a.splice(2,0,100);
// console.log(a)
// a.splice(1,0,31,67,98)
// console.log(a);
// a.splice(3,1);
// console.log(a)
// a.splice(4,2)
// console.log(a);
// a.splice(1,1,200);
// console.log(a)
// a.splice(3,1,500,800)
// console.log(a)


//slice
//it copy a section data from an array & return a new array 

let str:string[]=['Core Java','Advanced Java','Spring Boot','Angular 12','React js','Docker','Jenking','AWS'];

// let new1=str.slice(1,6);
// console.log("Original array "+str);
// console.log("Copied array is "+new1);
// let new2=str.slice(1);
// console.log("Copied array is "+new2);
// let new3=str.slice();
// console.log("Copied array is "+new3);

//map

let arr:number[]=[2,3,4,5,6];

let res=arr.map((myvalue)=>{
    return (myvalue*myvalue);
});
console.log("Original array "+arr)
console.log("Resultant array "+res)

let res1=arr.map((myvalue,i)=>{
        if(i==2 || i==3){
            return (myvalue*myvalue);
        }   
});

console.log("Resultant array "+res1.join(" "))