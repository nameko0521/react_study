const fn = (name = "Guest") =>
    console.log(`Welcome ${name}`);

fn("hoge");

const obj = {
    //name: "hoge",
    age: 15,
}
const { name="fuga" } = obj;
console.log(`${name}`);
