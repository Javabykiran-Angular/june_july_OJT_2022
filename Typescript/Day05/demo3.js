//optional paramter functions
function add1(a, b) {
    console.log("Value of a is " + a); //7
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> Not a number
}
// add1(7)
function add2(a, b) {
    console.log("Value of a is " + a); //7
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> Not a number
}
// add2();
//default paramter functions
function add3(a, b) {
    if (b === void 0) { b = 5; }
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //7
    console.log("Addition of a+b is " + (a + b)); //17
}
// add3(10)
// add3(10,7)
function add4(a, b) {
    if (a === void 0) { a = 2; }
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //7
    console.log("Addition of a+b is " + (a + b)); //17
}
// add4(5,10);
function add5(a, b) {
    if (a === void 0) { a = 2; }
    console.log("Value of a is " + a); //2
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //nan
}
add5();
