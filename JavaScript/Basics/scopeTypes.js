//Total 4 Scopes are there
//1)Global Scope using var keyword
console.log("Global Scope By Using var Keyword-----");
var a = 10 //Global Scope
console.log(a);


//2)Script Scope By using let and const (declare at top of js)
console.log("Script Scope By Using let and const keyword------");

let b = 20 //Script Scope
const c = 30 //Script Scope
console.log(b);
console.log(c);

//3)Function Scope by Using var, let and const(declare inside the function)
console.log("Function Scope By Using var,let and const keyword------");

function test() {
    var d = 40
    let e = 50
    const f = 60
    console.log(d);
    console.log(e);
    console.log(f);
}
test()
// console.log(d); //ReferenceError (bcz it is accessible only inside the function)
// console.log(e); //ReferenceError (bcz it is accessible only inside the function)
// console.log(f); //ReferenceError (bcz it is accessible only inside the function)




//3)Block Scope by Using let and const(declare inside the block)
console.log("Block Scope By Using let and const keyword------");
{
    let g = 70
    const h = 80
    console.log(g);
    console.log(h);

    // var i = 90
    
}
// console.log(g); //ReferenceError(bcz it is accessible only inside the block)
// console.log(h); //ReferenceError(bcz it is accessible only inside the block)
// console.log(i); //90 (bcz here var work like Global not a Block)



