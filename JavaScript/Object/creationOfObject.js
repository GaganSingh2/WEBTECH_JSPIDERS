// Ways to Create an Object in JavaScript---------
console.log("Ways to Create an Object in JavaScript-------------");


//1)By Using Object Literals---------
console.log("1) By Using Object Literals-----------");
let mySelf = {
    name: "Gagan",
    age : 22,
    address: "Bangalore"
}
console.log("MySelf: ",mySelf);


//2)By Using new Object(): also called as Object Constructor
console.log("By Using new Object()-------------");
let player = new Object() //create empty object, and add properties later

player.name = "Virat Kohli"
player.teamName = "RCB"
player.jersyNum = 18
// player.name = "rohit" //if i again used same key then it override the old value with new Value
console.log("Player Info: ", player);


//3)By Using Constructor Function: used to create multiple instance with similar properties means to initialize the same properties with diff-diff values
console.log("By Using Constructor Function-------------");

function Player(name, teamName, jersyNum){ //function body
    this.name = name
    this.teamName = teamName
    this.jersyNum = jersyNum
}

let player1 = new Player("Virat Kohli","RCB",18); //initialize the properties using Constructor of function
console.log("Player1 Info: ", player1);

let player2 = new Player("Rohit Sharma","MI",45);//initialize the properties using Constructor of function
console.log("Player2 Info: ", player2);

let player3 = new Player("KL Rahul","DC",1);//initialize the properties using Constructor of function
console.log("Player3 Info: ", player3);