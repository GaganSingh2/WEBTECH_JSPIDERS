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