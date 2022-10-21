// Swapping variables without using 3rd variables (Js interview Question)
// 1 using 3rd variable
// 2 addition & substraction
// 3 multiplication & division
// 4 Using xor operator
// 5 using derefernce of array

let a=10;
let b=20;
console.log(`------ Before Swapping ---
        a=${a}
        b=${b}
`);

[a,b]=[b,a];

console.log(`--------- After Swapping ---
        a=${a}
        b=${b}
`);
