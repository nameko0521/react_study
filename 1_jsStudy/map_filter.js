const arr0 = [10, 20, 30];
const arr1 = arr0.map((name) => {
    return name + 10;
});
console.log(arr1);

for(i=0; i<arr0.length; i++){
    console.log(arr0[i]);
}

arr0.map((name) => console.log(name));

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const arr3 = arr2.filter((name) => {
    return name % 2 === 0;
})
console.log(arr2);
console.log(arr3);

const nameArr = ["A", "B", "C"];
nameArr.map((name, i)=> console.log(`${++i}番目は${name}です。`))
