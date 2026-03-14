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
