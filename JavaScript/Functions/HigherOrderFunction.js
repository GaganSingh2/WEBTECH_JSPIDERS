//Higher Order Function-----------------
console.log("Higher Order FUnction-----------------");
function demo(operation){
    console.log("Demo Function");
    return operation()
}
function hello(){
    console.log("Hello FUnction");
    
}
demo(hello);


console.log("HOF with Arguments----------");
function calculate(a,b,operation){
    return operation(a,b)
}
function add(a,b){
    return a+b
}
console.log("Add: "+calculate(5,10,add));

// HOF as Parameter
console.log("HOF as Parameter----------");
function greet(name){
    return "Hello "+name
}
function processUser(callback){
    console.log(callback("Gagan"));
}
processUser(greet)