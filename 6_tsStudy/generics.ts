type CustomType<T> = {
    val: T;
    t: T;
    i: T;
}

const strObj: CustomType<string> = { val: "A", t: "B", i: "10"};
console.log(strObj);
