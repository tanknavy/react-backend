//import {a} from "./module.js";
// common js import
var aa = import("./module.js")
console.log(aa)
const bb = require("./module.js") //common js
console.log(bb.b);

// import {log,log2,log3} from "./3.module"
// log("exports.....")
// log2("module.exports....")
// log3("moduel.exports =...")