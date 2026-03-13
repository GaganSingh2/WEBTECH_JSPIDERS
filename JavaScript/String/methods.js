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


// 7)replace(searchValue, newValue): replace first occurrence only, case-sensitive
console.log("replace(searchValue, newValue)-----------------");
let brep = "gagan"
console.log("Before Replacing: "+brep);
let arep = brep.replace('g','d')
console.log("After Replacing: "+arep);


// 8)replaceAll(searchValue, newValue): replace all occurrence, case-sensitive
console.log("replaceAll(searchValue, newValue)-----------------");
brep = "gagan"
console.log("Before Replacing: "+brep);
arep = brep.replaceAll('g','d')
console.log("After Replacing: "+arep);


//9) subString(startIndex, endIndex): extract subString from the given string,not support -ve idx, means treated as 0
console.log("substring(startIdx, endIdx)----------------");
let bstr = 'JavaScript'
console.log("String: "+bstr);

let subStr = bstr.substring(4)
console.log("substring(4): "+subStr);

subStr = bstr.substring(4,7)
console.log("substring(4,7): "+subStr);

subStr = bstr.substring(7,4) //if stIdx > endIdx then automatically swap means stIdx=4, endIdx = 7
console.log("substring(7,4): "+subStr);

subStr = bstr.substring(-4,7) //negative index reset with 0 means(0,7)
console.log("substring(-4,7): "+subStr);

subStr = bstr.substring(-4,-1) //both reset with 0 means(0,0) so empty string
console.log("substring(-4,-1): "+subStr);

subStr = bstr.substring(-4) //negative index reset with 0
console.log("substring(-4): "+subStr);

subStr = bstr.substring(11,14) //if both idx are greater than the string length then js treated as both length of sting means (10,10) so Empty String
console.log("substring(11,14): "+subStr);

subStr = bstr.substring(4,15) //if index is out of bound then js treated as length of string so (4,10)
console.log("substring(4,11): "+subStr);


// 10)slice(startIdx, endIdx): extract the subString from the given string, support -ve idx, means don't treated as 0
console.log("slice(startIdx, endIdx)------------------------");
let sStr = 'javascript'
console.log("String: "+sStr);

let sliceStr =  sStr.slice(4)
console.log("slice(4): "+sliceStr);

sliceStr =  sStr.slice(0,4)
console.log("slice(0,4): "+sliceStr);

sliceStr =  sStr.slice(-4) //its count from end left-right
console.log("slice(-4): "+sliceStr);

sliceStr =  sStr.slice(-4,-1)
console.log("slice(-4,-1): "+sliceStr);

sliceStr =  sStr.slice(4,2) //if startIdx > endIdx then return Empty String
console.log("slice(4,2): "+sliceStr);

sliceStr =  sStr.slice(-4,-6) //if startIdx > endIdx then here startIdx=6 and endIdx = 4, slice(6,4) so return Empty String
console.log("slice(-4,-6): "+sliceStr);


// 11) split(separator): convert the string to array
let splitStr = 'hi gagan how are u'
console.log("String: "+splitStr);
let aSplit = splitStr.split(' ')
console.log("After Split: "+aSplit);
