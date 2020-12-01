const dllFun = require("./app")
let result = null;

result = dllFun.add(5, 2);
console.log("5+2=" + result);

result = dllFun.minus(5, 2);
console.log('5-2='+result);

result = dllFun.multiply(5, 2);
console.log('5*2='+result);