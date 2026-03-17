
//Default Work of this keyword in the object or function
console.log("Default Work of this keyword in the object or function---------");
let obj = {
    name: "Navneet",
    demo: function(){
        console.log("Name: "+this.name);//this refers to current object (obj)
    },
    address: {
        state: "Bihar",
        city: "Gopalganj",
        pin: 1234
    }
}
console.log("State: "+obj.address.state);
obj.demo()

function demo(){
    console.log(this);//this refers to global object
}
// demo()


//Using Arrow Function-----------------
console.log("Using Arrow Function------------");
let obj2 = {
  name: "Navneet",
  demo: () => {
    console.log("Name: "+this.name); //he gives undefined bcz we know Arrow functions do NOT have their own this keyword, They use outer scope this
  }
}
obj2.demo();





// let obj1 = {
//     name: "Apple",
//     price: 35.5
// }

// function demo(){
//     console.log(this);
// }
// // demo.call()
// // demo.call(obj1)


// let obj2 = {
//     name: "Dishaa",
//     city: "MP"
// }
// function demo(age, skill){
//     console.log(`I am ${this.name} from ${this.city}`);
//     console.log(`${age} and ${skill}`);
//     console.log("--------------------");
    
// }
// demo.call(obj2,23,"JavaScript") // here we pass the arguments directly to function and if i didn't pass then it will take undefined
// demo.apply(obj2,[23,"Java"]) //here we pass the argument in the form of array and if i didn't pass then it will take undefined
// let bnf = demo.bind(obj2,22,"Java")
// bnf()
// let bnf1 = demo.bind(obj2,22,"Java")
// bnf1("Spring Boot")//if we try to override the argument but it is automatically bind the value at calling bind() time means here Java print as answer instead of Spring Boot