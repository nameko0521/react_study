var str = "A";
str = "B";
//str = 10;
console.log(str);
var numf = 0.01;
var bool = true;
if (bool) {
    console.log(bool);
}
var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];
arr1.push(11);
arr2.push(12);
//arr1.push("10");
//arr2 = 10;
console.log(arr1);
console.log(arr2);
var fn0 = function (num) {
    console.log(num);
};
fn0(10);
var fn1 = function (num) {
    return (num % 2 == 0) ? true : false;
};
console.log(fn1(10));
var obj0 = {
    name: "tekito",
    age: 17,
    etc: undefined
};
console.log(obj0);
var obj1 = {
    str: "A",
    num: 10
};
console.log(obj1);
var obj2 = {
    str: "A",
    num: 10,
    bool: false
};
console.log(obj2);
var arr3 = [10, 20, 30];
console.log(arr3);
arr3 = "Hello";
console.log(arr3);
