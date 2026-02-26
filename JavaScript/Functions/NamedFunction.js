//Types of Function-------
//1) Named Function
console.log("Named Function-----------");
function demo() {
    console.log("Demo");
}
demo()

console.log("Named Function with Parameter-----------");
function sum(a,b) {
    console.log("Sum: "+(a+b));
}
sum(5,5)

function add(a,b) {
    console.log("Add: "+(a+b)); //NaN bcz we pass only one argument so 5 store inside the a but b initialize with bydefault undifined so we can't perfrom any operation with undefined
}
add(5)

console.log("Named Function with Parameter and default value-----------");
function mulitply(a,b=3) {
    console.log("Muiltiply: "+(a*b));
}
mulitply(5)

function divide(a,b=3) { //b reinitilize with 5
    console.log("Divide: "+(a/b));
}
divide(15,5)

console.log("Named Function with Parameter and return statement-----------");
function modulus(a,b) {
    return a % b
}
// console.log("Remainder: "+(modulus(5,3)));
let remainder = modulus(5,3)
console.log("Remainder: "+remainder);
