// Method of Object----------------------------
console.log("Method of Object------------------");

// 1)Object.keys(objName): used to get all the keys in the array form
console.log("1)Object.keys(objName)-----------------");
let user = {
    name: "Gagan",
    city: "Bangalore",
    age: 22
}
let keys = Object.keys(user)
console.log("Keys: ",keys);


// 2)Object.values(objName): used to get all the value in the array form
console.log("2)Object.values(objName)-----------------");
user = {
    name: "Gagan",
    city: "Bangalore",
    age: 22,
    skill: "Java"
}
let values = Object.values(user)
console.log("Values: ",values);


// 3)Object.entries(objName): used to get all the pairs[key,value] in the array form
console.log("3)Object.entries(objName)-----------------");
user = {
    name: "Gagan",
    city: "Bangalore",
    age: 22,
    skill: "Java"
}
let entries = Object.entries(user)
console.log("Entries: ",entries);


//4)Object.assign(targetObject,obj1, obj2, obj3......obj-n):copies properties from one or more source objects into a target object.
console.log("Object.assign(targetObject,obj1, obj2, obj3......obj-n)----------------");
let obj1 = {
    name: "Gagan"
}
let obj2 = {
    skill: "Java"
}
let obj3 = { 
    city: "Bangalore"
}
Object.assign(obj3,obj1,obj2)//here, obj3 is targetObj means obj2 and obj1 store in obj3
console.log("Properties: ",obj3);
let targetObj = Object.assign({},obj1,obj2,obj3)//here, our tagetObj is new object({}) and remaining obj1,obj2 and obj3 are store in the new object and access through the objName
console.log("Properties: ",targetObj);



// 5)Object.seal(objName): prevent adding and deleting properties, but allows updating existing values.
console.log("Object.seal(objName)--------------");
let player = {
    name: "Virat",
    jersyNum: 18,
    teamName: "RCB"
}
console.log("Before Object.seal(player): ",player);
Object.seal(player)
player.name = "Virat Kohli" //Updating allow
player.age = 32 //adding new properties not allow
delete player.name //deleting properties not allow
console.log("After Object.seal(player): ",player);


// 5)Object.freeze(objName): prevent adding and deleting as well as updating properties also means Completely Immutable.
console.log("Object.freeze(objName)--------------");
player = {
    name: "Virat",
    jersyNum: 18,
    teamName: "RCB"
}
console.log("Before Object.freeze(player): ",player);
Object.freeze(player)
player.name = "Virat Kohli" //Updating not allow
player.age = 32 //adding new properties not allow
delete player.name //deleting properties not allow
console.log("After Object.freeze(player): ",player);


// 6)Object.isFrozen(objName): checks whether an object is frozen
console.log("Object.isFrozen(objName)--------------------");
let user2 = {
    name: "Gagan",
}
console.log("User2 isFrozen: ",Object.isFrozen(user2));
Object.freeze(user2) //make object as frozen
console.log("User2 isFrozen: ",Object.isFrozen(user2));


// 7)Object.isSealed(objName): checks whether an object is Sealed
console.log("Object.isSealed(objName)--------------------");
let user3 = {
    name: "Gagan",
}
console.log("User3 isSealed: ",Object.isSealed(user3));
Object.seal(user3)// make object as sealed
console.log("User2 isSealed: ",Object.isSealed(user3));