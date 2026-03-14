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



