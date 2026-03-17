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
console.log("After Updating: ",user2);

