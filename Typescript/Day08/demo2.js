//Functions that return multiple values (JS interview Question)
function operation(a, b) {
    return ([a + b, a - b, a * b]);
}
var _a = operation(5, 2), add = _a[0], sub = _a[1], mul = _a[2];
console.log("\n        addition       = ".concat(add, "\n        substraction   = ").concat(sub, "\n        Multiplication = ").concat(mul, "\n    "));
