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

//other waysss
function mySelf(city,country){
     console.log(`My Name ${this.name} from ${city}, ${country}`); 
}
let user2 = {
    name: "Gagan"
}
console.log("Before using call() method:");
mySelf(user2,"Bangalore","India")
console.log("After using call() method:");
mySelf.call(user2,"Bangalore","India")


//1) Using apply(thisArg, [arg1, arg2,..........]):here argument passed in the form of array
console.log("Using call(thisArg, [arg1, arg2,..........])---------------");
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
selfIntro.apply(self,["Bangalore","India"])