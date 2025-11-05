const fs = require("fs");
setImmediate(() => console.log("set Immediate"));
setTimeout(() => {
    setImmediate(()=> console.log(" Inner setImmediate"))
  console.log("Timer Expired");
}, 0);
Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt", "utf8", () => {
  setImmediate(() =>
    
console.log("2nd setImmediate"))

  
  setTimeout(() => {
    console.log(" 2nd Timer Expired");
    setImmediate(()=> console.log(" Inner setImmediate"))
     }, 0);
  
    
 
  process.nextTick(() => console.log(" 2nd NextTick")); 

  console.log("File Reading ");
});
process.nextTick(() =>{
    process.nextTick(()=> console.log("Inner NextTick")); 
    setImmediate(() => console.log(" Inner setImmediate"));

    console.log("NextTick");
});
console.log("last Line of the file");
