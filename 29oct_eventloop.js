const fs = require("fs");
const a=100;
setImmediate(()=>console.log("setImmediate"));
Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading ")
});

setTimeout(()=>{
    console.log("Timer off");
 
},0);
process.nextTick(()=> console.log("process.nextTick"))
 
function printA(){
    console.log("a=",a);
}
printA();
console.log("last line");
// Output 
 






