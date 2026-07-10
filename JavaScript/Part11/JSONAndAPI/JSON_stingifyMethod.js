//Converting the JavaScript Object to JSON String we used the method
//JSON.stringify(obj)

console.log("Before Converting: ");

let userObj = {
    name: "Gagan",
    age: 22,
    College: "Jaipur"
}

console.log("TypeOf user: ",typeof userObj);


console.log("After Converting ");
let jsonData = JSON.stringify(userObj)
console.log("TypeOf JsonData: ",typeof jsonData);


/*
Internal Working

Before:

let user = {
    name: "Gagan",
    age: 22
};

Memory:

user
 |
 v
{
  name: "Gagan",
  age: 22
}

After:

let json = JSON.stringify(user);

Memory:

json
 |
 v
'{"name":"Gagan","age":22}'

Now it is a string.

Check:

console.log(typeof json);

Output:

string
*/