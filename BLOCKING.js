const crypto = require("node:crypto");
var a = 3;
var b = 5;

// pbkdf2 : password based key derivative function

//  Synchronous function block the ma in thread do not use it
crypto.pbkdf2Sync("password", "salt", 500000, 50, "preet");
console.log("Key is generated");

crypto.pbkdf2("password", "salt", 500000, 50, "preet", (error, key) => {
  console.log("Key is generated");
});
//
setTimeout(() => {
  console.log("call me right now");
}, 0);
// It will mainly be called if main thread is empty
function mult(x, y) {
  const result = a * b;
    return result;
}
var c = mult();
console.log(c);
// Password based key derivative function2
