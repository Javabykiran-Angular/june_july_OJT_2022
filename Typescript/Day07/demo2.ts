//dereference of array

let a:number[]=[21,4,55,6];

let [t1,t2,t3,t4]=a;
// console.log(`
//     T1= ${t1}
//     T2= ${t2}
//     T3= ${t3}
//     T4= ${t4}
// `)

let [s1,...arr]=a;

console.log(`
    s1=  ${s1}
    Arr= ${arr}
`)

