function fn1(value){
    return value;
}
console.log(fn1("run fn1."));


const fn2 = function(value){
    return value;
}
console.log(fn2("run fn2."));


const fn3 = (value) => {
    return value;
}
console.log(fn3("run fn3."));


const fn4 = (value1, value2) => {
    return value1 + value2;
}
console.log(fn4("run ", "fn4."));
console.log(fn4(10, 5));


const fn5 = (num1, num2) => num1 + num2;
console.log(fn5(10, 10));


const fn6 = (val1, val2) => (
    {
        name: val1,
        age: val2,
    }
)
console.log(fn6(10, 15));
