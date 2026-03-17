//1) Adding the properties-------------------
console.log("1)Adding the propertie---------------------");
console.log("i)Using Dot Operator(.)-------");
let user = {
    name: "Gagan"
}
console.log("Before Adding: ",user);
user.skill = "JavaScript" //add new property
console.log("After Adding: ",user);

console.log("i)Using Bracket Notation([])-------");
let user1 = {
    name: "Gagan"
}
console.log("Before Adding: ",user1);
user1["city"] = "Bangalore" //add new property
console.log("After Adding: ",user1);


//2) Updating the Properties------------------
console.log("2)Updating the Propertie-------------");
let user2 = {
    name:"Gagan",
    city:"Bangalore"
}
console.log("Before Updating: ",user2);
user2.city = "Jaipur" //update the city
// user2.age = 21 //if i try to update unavailable properties in the object then it is imlicitly add this property as a new Property
console.log("After Updating: ",user2);


//3)Deleting the Properties-------------
console.log("3)Deleting the Properties--------------");
let user3 = {
    name:"Gagan",
    city:"Bangalore"
}
console.log("Before Deleting: ",user3);
delete user3.city
// delete user3.age //nothing happened
console.log("After Deleting: ",user3);

