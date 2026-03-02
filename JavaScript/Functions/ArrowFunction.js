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
let hello = a => {
    console.log("Value of A: "+a);
}
hello(2,5)


//2) If Arrow Function take more than One Argument then Parenthesis () is required otherwise it will throw CTE
let help = (a,b) => {
    console.log("Sum of "+a+" and "+b+": "+(a+b));
}
help(5,5)