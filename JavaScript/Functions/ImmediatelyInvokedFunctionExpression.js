//Immediately Invoked Function Expression------------------
console.log("Invoked Without Invoking separately-------");
(function (){
    console.log("Immediatley Invoked Function Expression");
})();

// IIFE with Arguments--------
console.log("IIFE With arguments----------");
(function (name){
    console.log("Hello "+name);
})("Gagan!");


// Avoid Global Scope pollution: means Variable inside an IIFE are private
console.log("Avoid Global Scope Pollutions------");

(function (){
    let a = 10
    console.log("A: "+a);
    
})();
// console.log("A: "+a);//ReferenceError: a is not defined bcz a is restrict only in IIFE block
console.log("Exmple of Global Scope Pollution----");

var v1 = 10;
var v2 = 20;
function add(){
    console.log(v1+v2);
}
add();
var count = 10;
function increment(){
    count++; //Now the original count is overwritten
    console.log(count);
    
}
increment()

//Semicolon before IIFE is recommended to avoid unexpected errors, bcz JS engine may to treat the IIFE as a part of the previous line if we don't use semicolon if Previous statement.
console.log("Semicolon before IIFE is recommended to Avoid Unexpected Errors----");

// let a = 20
// (function (){
//     console.log("Value: "+a);
// })();
//THis is show error: TypeError- 20 is not a function. bcz here we are not using semicolon after the first line so JS treat like:
// let a 20(function (){console.log("Value: "+a)}()); bcz here JS thinks u are trying to call 20 as a function

//Correct way is-
let a = 20;
(function (){
    console.log("Value: "+a);
})();
//or
let b = 20
;(function (){
    console.log("Value: "+b);
})();