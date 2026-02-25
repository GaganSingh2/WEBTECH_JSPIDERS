//Falsy Values-----------
// false
// 0
// -0
// 0n
// "" 
// null
// undefined
// NaN

//Truthy Values------------
// true
// 1
// "0"
// "false"
// []
// {}
// function(){}

console.log("12 + '22': "+(12 + '22'));
console.log("12-'22': " +(12-'22'));
console.log("![] + []: "+(![]+[]));
console.log("![]-[]-![]: "+(![]-[]-![]));
console.log("[1]+[2]: "+([1]+[2]));
console.log("[1,2]+[3,4]: "+([1,2]+[3,4]));
console.log("[10]-0: "+([10]-0));
console.log("[[]]+![]+[]: "+([[]]+![]+[]));
console.log("[] == []: "+([] == []));
console.log("{} == {}: "+({} == {}));
console.log("{} == []: "+({} == []));
console.log("[]-![]+[]: "+([]-![]+[]));
console.log("[]+[1-[]]: "+([]+[1-[]]));






