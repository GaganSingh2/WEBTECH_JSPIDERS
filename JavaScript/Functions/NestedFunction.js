// Nested Function------------------
console.log("Basic Nested Function------------");
function outer(){
    console.log("Outer Function");

    function inner(){
        console.log("Inner Function");
    }
    inner()
}
outer()


// Lexical Scoping: inner2() is written inside outer() so it can access variable name, this behavior is called as Lexical Scoping.
console.log("Lexical Scoping------------");

function outer2(){
    let name = "Gagan" //Outer function variable

    function inner2(){
        console.log("Hello "+name);
        
    }
    inner2()
}
outer2()


// Creating counter using nested function
console.log("Creating counter using nested function----------");
function outer3(){
    let count = 0

    function inner3(){
        count++
        return count
    }
    return inner3
}
let counter = outer3()
console.log("Count: "+counter());
console.log("Count: "+counter());

// Closure
console.log("Closure----------------------");

function parentFunction(){
    let parentVar = "I am a parent variabl"

    function childFunction(){
        console.log(parentVar);//it is able to access parentFunction variable even after the parentFunction has finished executing
        
    }
    return childFunction
}
let child = parentFunction()
child() 


