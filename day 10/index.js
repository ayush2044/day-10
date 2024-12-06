// function sum(a,b){
//     let sum = a + b;
//     for (i = 0;i<= sum.lenght;i++){
//     console.log(sum);
// }

// }
const counter = document.getElementById("counter");
let count = 0;
function increment() {
    count++;
    counter.innerText = count;
}
function decrement(){
    count--;
    counter.innerText = count;
}
const a = 5;
const b = 6;
console.log(a);
try {
    a = 6;
console.log(a);
} catch (error) {
    console.log(error);
}
console.log(b);
// function mypromise(res,rej){
//     let delay = 1000000;
//     while (delay--);
//     res("hello world");
// }
const mypromisefun = new Promise(solve);
function solve(fun1,fun2){
    const n =9999999;
    fun1("data");
}
console.log(mypromisefun);