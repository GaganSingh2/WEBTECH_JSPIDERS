// Slice(startIdx, EndIdx): it is exclude the endIdx, and . 
let str = "javascript"
console.log(str.slice(0,4));
console.log(str.slice(-4,1)); //if the startIdx smaller than the endIdx then it will return empty string
console.log(str.slice(6,2)); //empty string
console.log(str.slice(-4)); //if we don't pass endIdx so it will return all the string from the startIdx.
console.log(str.slice(-4,-1));
