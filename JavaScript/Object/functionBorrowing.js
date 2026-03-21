// Function Borrowin:Taking a function from one object and using it for another object by changing this.

// 1)Function Borrowing using call() method
console.log(" 1)Function Borrowing using call() method-----------");

let user1 = {
    name:"Gagan",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

let user2 = {
    name: "Rahul"
}
user1.greet.call(user2) //Borrow greet function
//user2 doesn’t have greet()
// But it borrows it from user1


// 2)Function Borrowing using apply() method
console.log("Function Borrowing using apply() method---------------");
let person1 = {
    name: "Gagan",
    greet: function(age,city){
        console.log(`Hello ${this.name}, ${age}, ${city}`);
    }
}
let person2 = {
    name: "Amit"
}
person1.greet.apply(person2,[22,"Jaipur"])
//person2 doesn’t have greet()
// But it borrows it from person1


// 3)Function Borrowing using bind() method
console.log("Function Borrowing using bind() method---------------");
let player1 = {
    name:"KL Rahul",
    greet: function(){
        console.log(`Hello ${this.name} sir!`);
    }
}

let player2 = {
    name:"Virat Kohli"
}
// Create borrowed function
let newFunc1 = player1.greet.bind(player2)
newFunc1()
//here, player2 does not have greet()
//but it borrow it from the player1

// other ex
console.log("-------------------------------------");

let player3 = {
    name:"KL Rahul",
    greet: function(teamName){
        console.log(`Hello ${this.name} sir your teamName ${teamName}!`);
    }
}

let player4 = {
    name:"Virat Kohli"
}
let newFunc2 = player3.greet.bind(player4)
newFunc2("RCB")
newFunc2("India")