//array 
//array is dynamically growable & shrinkable
//array does not have any fixed size 
//u can store homogenous as well as hetrogenous data
var arr;
var arr1 = [5, 6, 7];
var arr2 = [];
var arr3 = [2.5, 5, 8];
var arr4 = [2, 'sumit', true];
var arr5 = [3.4, 'Sumit', 6];
// for(let i=0;i<arr1.length;i++){
//     console.log("Array value is "+arr1[i]);
// }
// console.log("Array is "+arr1);
// console.log("Display array using join method "+arr1.join(" # "));
// console.log("Display array using join method "+arr1.join());
//Foreach loop
// arr4.forEach((myvalue,i)=>{
//     console.log(myvalue+" Index is "+i)
// });
//rest paramter functions
function display(a) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    // console.log(item);
    console.log("Item is ".concat(item, " 1nd parameter is ").concat(a));
}
// display(3,44,5,66,12,90)
// display(3)
// display();
//  display("Sumit",88,78,63,45);
// push & pop
//LIFO Principal 
// data will add at the last & remove data from last 
var a = [];
a.push(77);
console.log(a);
a.push(89, 6, 52);
console.log(a);
var res = a.pop();
console.log(a);
console.log("Poped value " + res);
