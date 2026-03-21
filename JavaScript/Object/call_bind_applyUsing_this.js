// call(), apply() and bind()--------------------------
console.log("Before Explicitly Setting this keyword using call(), apply() and bind()------------------------");

// function greet(){
//     console.log(this.name); //undefined
//     console.log(this); //window object Browser or Global object in Node.js Environment
// }
// greet()


//1) Using call(thisArg, arg1, arg2,..........):
console.log("Using call(thisArg, arg1, arg2,..........)---------------");
function greet(){
    console.log("Name: "+this.name);
}
let user = {
    name: "Gagan"
}
greet.call(user)

//other waysss:
function mySelf(city,country){
     console.log(`My Name ${this.name} from ${city}, ${country}`); 
}
let user2 = {
    name: "Gagan"
}
console.log("Before using call() method:");
mySelf(user2,"Bangalore","India")
console.log("After using call() method:");
mySelf.call(user2,"Bangalore","India") //argument passed separatly to the function


//2) Using apply(thisArg, [arg1, arg2,..........]):here argument passed in the form of array
console.log("Using apply(thisArg, [arg1, arg2,..........])---------------");
function help(){
    console.log("Name: "+this.name);
}
let helpU = {
    name: "Karan"
}
help.apply(helpU)

//other wayss
function selfIntro(city,country){
    console.log(`my name is ${this.name} from ${city}, ${country}`);
}
let self = {
    name:"Karan"
}
console.log("Before using apply(): ");
selfIntro(self,"Bangalore","India")
console.log("After using apply(): ");
selfIntro.apply(self,["Bangalore","India"])  //argument passed in the form of array to the function



//3) Using bind(thisArg, arg1, arg2,..........):here argument passed separetly and return new Function so store in a variable and called later
console.log("Using bind(thisArg, arg1, arg2,..........)---------------");
function hello(){
    console.log("Name: "+this.name);
}
let helloU = {
    name: "Gagan"
}
let newFunction = hello.bind(helloU)
newFunction()

//other wayss
function selfIntro1(city,country){
    console.log(`my name is ${this.name} from ${city}, ${country}`);
}
let self1 = {
    name:"Karan"
}
console.log("Before using bind(): ");
selfIntro(self,"Bangalore","India")
console.log("After using bind(): ");
let newFunc = selfIntro.bind(self1,"Bangalore","India")  //argument passed separetly
newFunc()

let newFunc2 = selfIntro.bind(self1,"Bangalore")
newFunc2()
newFunc2("India")