const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const fn = (value) => console.log(value[0] + value[1]);
fn(arr1);

const fn1 = (value1, value2) => console.log(value1 + value2);
fn1(...arr1);
