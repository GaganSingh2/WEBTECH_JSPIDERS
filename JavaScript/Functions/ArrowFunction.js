// Arrow Function----------
()=>{
    console.log("Hello"); //this is not printing bcz we donot invoke this function
}

//For Invoking this function we store this function inside a variable and then invoke the function using variable name
let demo = () => {
    console.log("Demo Hello");
}
demo() //here invoke using variableName()

//Characteristics of Arrow Functions--------
//1) If Arrow Function take One Argument then Parenthesis () is not required
console.log("1) if Arrow Function Take one arguments----");

let hello = a => {
    console.log("Value of A: "+a);
}
hello(2,5)


//2) If Arrow Function take more than One Argument then Parenthesis () is required otherwise it will throw CTE
console.log("2) if Arrow Function Take more than one arguments----");
let help = (a,b) => {
    console.log("Sum of "+a+" and "+b+": "+(a+b));
}
help(5,5)

//3) Implicit Return: i.e if the function has only one line of code then return keyword or Curly Brackets{} are not required
console.log("3) If Arrow Function has only one line of code-----");

let callMe = (a,b) => a+b
console.log("Sum: "+callMe(5,5));

// let helpMe = (a,b) => console.log("Substraction: "+(a-b))
//  console.log(b); 
// helpMe(10,3)
////ReferenceError: b is not defined, bcz we don't use here curly brackets so our function body keep only one code in side the function block so 2nd line of code not comes under this function body so b is not accessible from the outside of the function body




//4)Explicit Return: i.e. if the function has more than one line of code or if we want to use return keyword explicitly then Curly Bracket is required
console.log("3) If Arrow Function has more than one line of code-----");
let multiply = (a,b)=>{
    return a*b
}
console.log("Multiply: "+multiply(5,2));

let modulo = (a,b)=>{
    let res = a % b
    return res
}
console.log("Modulo: "+modulo(5,2));
