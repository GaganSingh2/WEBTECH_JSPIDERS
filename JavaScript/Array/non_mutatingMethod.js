// Non Mutating Methods: do not change original array-------------------
console.log("Non-Mutating Array methods-------------");

let arr = new Array(1,2,2,3,4,5)

// 1)at(index): if index found return value, otherwise undefined, accept -ve index
console.log("at(index)---------------");
console.log("Value at(3): "+arr.at(3));
console.log("Value at(8): "+arr.at(8));


// 2) indexOf(element): return first occurence index, not found then return -1
console.log("indexOf(element)--------------");
console.log("indexOf(2): "+arr.indexOf(2));
console.log("indexOf(6): "+arr.indexOf(6));


// 3) lastIndexOf(element): return last occurence index, not found then return -1
console.log("lastIndexOf(element)--------------");
console.log("lastIndexOf(2): "+arr.lastIndexOf(2));
console.log("lastIndexOf(6): "+arr.lastIndexOf(6));


// 4)includes(searchValue, startIndex): Checks if array contains a specified value or not
console.log("includes(searchValue, startIndex)------------");
console.log("includes(2): "+arr.includes(2));//check from 3 index
console.log("includes(2,3): "+arr.includes(2,3));//check from 3 index
console.log("includes(5): "+arr.includes(8));


//5) concat(arr1,arr2,......,arr-n): add 2 or more array and return new array
console.log("concat(arr1,arr2,......,arr-n)--------");
let arr1 = [1,2]
let arr2 = [3,4]
console.log("Array1: "+arr1);
console.log("Array2: "+arr2);
let newArr = arr1.concat(arr2)
console.log("New Array: "+newArr);


//6) slice(startIndex, endIdx): return a copy of a portion of an array
console.log("slice(startIndex, endIdx)------------------");
console.log("Before using slice: "+arr);

let sliced = arr.slice(1,2)
console.log("slice(1,2): "+sliced);

sliced = arr.slice(1,-2)
console.log("slice(1,-2): "+sliced);

sliced = arr.slice(-1,-2)
console.log("slice(-1,-2): "+sliced);


// 7)toString(): convert into string
console.log("toString()--------------");
console.log("toString(): "+arr1.toString());


//8) join(separator): convert array elements into string by using custome separtor
console.log("join(separator)-------------");
let jArr = [1,2,3,4,5]
console.log("Before using join(): "+jArr);

console.log("join(): "+jArr.join());//default separtor
jArr = ["Disha","Gagan","Karan"]
console.log("join(''): "+jArr.join(""));
console.log("join(' '): "+jArr.join(" "));

jArr = [1, ,3]
console.log("join(0): "+jArr.join(0));//after each value put 0
console.log("join('-'): "+jArr.join("-"));//after each value put -;

jArr = [1,[2,3],4]
console.log("join('-'): "+jArr.join("-"));


//9)flat(depth): creating new by flatting nested arrays, default depth=1
console.log("flat(depth)------------");
arr = [1,[2,3]]
console.log("flat(): "+arr.flat());

arr = [1,[2,[3]]]
console.log("flat(): "+arr.flat(2));

arr = [1, , 2, [ ,3]] //remove empty slots
console.log("flat(): "+arr.flat());

console.log("flat(infinity): "+arr.flat(Infinity)); //if don't know depth then passs infinity








