let str: string = "A";
str = "B";
//str = 10;
console.log(str);

let numf: number = 0.01;

let bool: boolean = true;

if (bool){
    console.log(bool)
}

const arr1: Array<number> = [1,2,3];
let arr2: number[] = [2,3,4];
arr1.push(11);
arr2.push(12);
//arr1.push("10");
//arr2 = 10;
console.log(arr1);
console.log(arr2);

const fn0 = (num: number): void => {
    console.log(num);
};
fn0(10);

const fn1 = (num: number): boolean => {
    return (num % 2 == 0) ? true : false;
};
console.log(fn1(10));

const obj0: {name: string, age: number, etc: any} = {
    name: "tekito",
    age: 17,
    etc: undefined,
};
console.log(obj0);

const obj1: { str: string } & { num: number } = {
    str: "A",
    num: 10,
};
console.log(obj1);

type TypeA = {
    str: string;
    num: number;
};
type TypeB = {
    str: string;
    bool: boolean;
};
type TypeC = TypeA & TypeB;

const obj2: TypeC = {
    str: "A",
    num: 10,
    bool: false,
};
console.log(obj2)

let arr3: Array<number> | string = [10,20,30];
console.log(arr3);
arr3 = "Hello";
console.log(arr3);
