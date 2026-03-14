// Array Loops-----------
console.log("Array Loops----------------");


// 1)for of()
console.log("for of()----------");
let snacks = ["Biscuit", "Chips", "Chocolate"];
for (let items of snacks) {
    console.log("Item: "+items);
}

let str = "Dishaaaa"
for(let ch of str){
    console.log("Character: "+ch);
}


//2) for in()
console.log("for in()----------");

for(let idx in snacks){
    console.log("Index: "+idx);
}


for(let idx in str){
    console.log("Index: "+idx);
}