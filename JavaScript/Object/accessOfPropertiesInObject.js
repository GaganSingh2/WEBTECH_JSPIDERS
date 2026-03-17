// Ways of Accessing the Properties of Object---------------------
console.log(" Ways of Accessing the Properties of Object---------------");


//1) By using Dot Operator(.): directly use the property name like (objName.keyName)
console.log("By using Dot Operator(.)---------------");
let player = {
    name: "Virat Kohli",
    teamName: "RCB",
    jersyNum: 18
}

console.log("Player Name: "+player.name);
console.log("Team Name: "+player.teamName);
console.log("Runs: "+player.run); //undefined bcz this key is not present in object
console.log("Jersy Number: "+player.jersyNum);



//2)By using Bracket Notation([]): 
// objName["keyName"]
console.log('By using Bracket Notation([]): objName["keyName"]----------');

let user = {
    name: "Dishaa",
    college: "Jagannath College",
    profession: "Software Developer"
}
console.log("Name: ",user["name"]);
console.log("College: "+user["college"]);
console.log("Professsion: "+user["profession"]);
console.log("Address: "+user["address"]); //undefined bcz this properties is not present in Object

// Or=> let tmp = "keyName" then objName[tmp]
console.log('By using Bracket Notation([]): objName[tmp]----------');
let myInfo = {
    name: "Gagan",
    skill: "Java",
    degree: "B.Tech",
    cgpa: 8.25
}

let myName = "name"
console.log("Name: "+myInfo[myName]);
let mySkill = "skill"
console.log("Skill: "+myInfo[mySkill]);
let myDegree = "degree"
console.log("Degree: "+myInfo[myDegree]);
let myCGPA = "cgpa"
console.log("CGPA: "+myInfo[myCGPA]);

