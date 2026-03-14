// 1)Using Literals
console.log("Creation of Array using Literals-----------");
let arr = [10,20,30,-10]
console.log("Array: "+arr);

arr = ["Gagan","Dishaa"]
console.log("Array: "+arr);

arr = ["Gagan","Dishaa",10,20]
console.log("Array: "+arr);


// 2)Using new Keyword
console.log("Creation of Array using new keyword-----------");

let newArr = new Array()
console.log("Array: "+newArr);
console.log("Length of Array: "+newArr.length);

newArr = new Array(5,10,13,23)
console.log("Array: "+newArr);
console.log("Length of Array: "+newArr.length);

newArr = new Array(5) //if we pass here single value then it will treat as the size of this array
console.log("Array: "+newArr);
console.log("Length of Array: "+newArr.length);

newArr = new Array("Gagan","Dishaa")
console.log("Array: "+newArr);
console.log("Length of Array: "+newArr.length);

newArr = new Array("Gagan","Disha",20,-20)
console.log("Array: "+newArr);
console.log("Length of Array: "+newArr.length);