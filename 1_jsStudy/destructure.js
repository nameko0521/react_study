const profile_obj = {
    name: "hoge",
    age: 15,
};
const {age, name} = profile_obj;
const msg_obj = `My name is ${name}, I'm ${age} years old.`;
console.log(msg_obj);


const profile_arr = ["hoge", 15];
const [name_arr, age_arr] = profile_arr;
const msg_arr = `My name is ${name_arr}, I'm ${age_arr} years old.`;
console.log(msg_arr);
