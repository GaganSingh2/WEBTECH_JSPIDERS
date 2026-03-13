// Pre-Define Methods of String: all method return new String as result don't change in original string.

//1) toLowerCase()-----------
console.log("toLowerCase() method------------------");
let str = 'GagAn'
console.log("Before: "+str+" -> After: "+str.toLowerCase());


//2) toUpperCase()-----------
console.log("toUpperCase() method------------------");
let str1 = 'GagAn'
console.log("Before: "+str1+" -> After: "+str1.toUpperCase());

// 3)toString(): convert value to string--------------
console.log("toString()----------------");
let val = false
console.log("Before using toString() typeOf of val: "+typeof val);
let res = val.toString() //or let res = (234).toString()
console.log("After using toString() typeOf of val: "+typeof res);



