// Arrow Function----------
()=>{
    console.log("Hello"); //this is not printing bcz we donot invoke this function
}

//For Invoking this function we store this function inside a variable and then invoke the function using variable name
let demo = () => {
    console.log("Demo Hello");
}
demo() //here invoke using variableName()