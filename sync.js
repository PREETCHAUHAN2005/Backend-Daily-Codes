console.log("Hello Namaste dev");

const a = 3;
const b = 5;
const {fs} = require("node:fs");
const {https} = require("node:https");
// Blocking thread due to synchronous fs function 
fs.readFile("./file.txt","utf8");
console.log("This will execute after file read"); 
setTimeout(() => {
  console.log("SetTimeout called in 3 second");
}, 3000);
function multiplyFn(x, y) {
  var x = 6;
  var y = 9;
  const pr = x * y;
  return pr;
  console.log(pr);
}
var c = multiplyFn(a, b);
console.log(c);

var intro = () => {
  console.log("Preet");
};
intro();
fs.readFile("./file.txt", "utf8", (error, data) => {
  console.log("file read", data);
});
https.get("https://data.json/products/1",(res) => {
  console.log("Data fetched successfully");
});
 