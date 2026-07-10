console.log("Before Converting: ");

let jsonData = '{"name": "Gagan", "age": 22}'
console.log("TypeOf jsonData: ", typeof jsonData);
console.log(jsonData.name); //undefined bcz currently jsonData is string

//convert this jsonData from String to JavaScript Object 
//we used one method called
//JSON.parse(jsonData):- used to convert JSON String into a JavaScript Object.
console.log("After Converting: ");

let obj = JSON.parse(jsonData)
console.log("TypeOf of obj: ", typeof obj);
console.log("Name: ", obj.name);
console.log("Age: ", obj.age);


/*
Internal Working

Before parsing:

let jsonData = '{"name":"Gagan","age":22}';

Memory:

jsonData
   |
   v
'{"name":"Gagan","age":22}'   <-- String

After parsing:

let obj = JSON.parse(jsonData);

Memory:

obj
 |
 v
{
  name: "Gagan",
  age: 22
}

Now we can access properties:

obj.name
obj.age
*/