// Swapping variables without using 3rd variables (Js interview Question)
// 1 using 3rd variable
// 2 addition & substraction
// 3 multiplication & division
// 4 Using xor operator
// 5 using derefernce of array
var _a;
var a = 10;
var b = 20;
console.log("------ Before Swapping ---\n        a=".concat(a, "\n        b=").concat(b, "\n"));
_a = [b, a], a = _a[0], b = _a[1];
console.log("--------- After Swapping ---\n        a=".concat(a, "\n        b=").concat(b, "\n"));
