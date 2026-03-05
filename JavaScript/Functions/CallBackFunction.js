// CallBack Function----------
console.log("CallBack Function-----------");
function greet(name){
    console.log("Hello "+name);
}

function processUser(callback){
    callback("Gagan")
}
processUser(greet)


console.log("CallBack Function with Parameters---------------");
function calculate(a,b,callback){
    return callback(a,b)
}

function sum(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

console.log("Add: "+calculate(5,10,sum));
console.log("Add: "+calculate(5,10,sub));
console.log("Add: "+calculate(5,10,mul));

