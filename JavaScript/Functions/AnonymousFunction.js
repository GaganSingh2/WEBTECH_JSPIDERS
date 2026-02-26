//Anonymous Function----------
console.log("Anonymous Function--------------------");
let greet = function(){
    console.log("Hello");
}
greet()

console.log("Anonymous Function with Parameter--------------------");
let add = function(a,b){
    console.log("Sum: "+(a+b));
}
add(5,5)

console.log("Anonymous Function with Return Statement--------------------");
let sum = function(a,b){
    return a+b
}
let res = sum(5,5)
console.log("Sum: "+res);


console.log("Anonymous Function with Variable in TDZ--------------------");
// help() //if we call here then it will throw error bcz currently help is not initialize and we try to call as function
let help = function(){
    console.log("Help");
}
help() //this is working