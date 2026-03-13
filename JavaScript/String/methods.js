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
// Note: we did not use toString() with null and undefined, it will cause TypeError


// 4)trimStart(): remove spaces from start only------------
console.log("trimStart()----------------");
let btrim = ' hi'
console.log("Before using trimStart() length of str: "+btrim.length);
let atrim = btrim.trimStart()
console.log("After using trimStart() length of str: "+atrim.length);


// 5)trimStart(): remove spaces from end only------------
console.log("trimEnd()----------------");
btrim = 'hi '
console.log("Before using trimEnd() length of str: "+btrim.length);
atrim = btrim.trimEnd()
console.log("After using trimEnd() length of str: "+atrim.length);


// 6)trim(): remove spaces from start and end------------
console.log("trim()----------------");
btrim = ' hi '
console.log("Before using trim() length of str: "+btrim.length);
atrim = btrim.trim()
console.log("After using trim() length of str: "+atrim.length);