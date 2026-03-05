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

// Function return another function
console.log("Function Return Another Function------");
function multiply(a){
    return function(b){
        return a*b
    }
}
let res = multiply(2)
console.log("Multiply: "+res(5));

// Real-World Example on Payment Method
console.log("Real-World Example on Payment Method--------")

function payWithUPI(amount){
    console.log("Don't back!!");
    if (amount>0) {
        console.log("Valid Amount!!");
        console.log("Paid "+amount+" using UPI!!");
        console.log("Payment Completed");
    }
    else{
        console.log("Invalid Amount!!");
        console.log("Payment InCompleted");
    }
}

function payWithCard(amount){
    console.log("Don't back!!");
    if (amount>0) {
        console.log("Valid Amount!!");
        console.log("Paid "+amount+" using Card!!");
        console.log("Payment Completed");
    }
    else{
        console.log("Invalid Amount!!");
        console.log("Payment InCompleted");
    }
}

function payWithNetBanking(amount){
    console.log("Don't back!!");
    if (amount>0) {
        console.log("Valid Amount!!");
        console.log("Paid "+amount+" using NetBanking!!");
        console.log("Payment Completed");
    }
    else{
        console.log("Invalid Amount!!");
        console.log("Payment InCompleted");
    }
}

function proecessPayment(amount,paymentMethod){
    console.log("Payment Started!!");
    paymentMethod(amount)
}
proecessPayment(1000,payWithNetBanking)