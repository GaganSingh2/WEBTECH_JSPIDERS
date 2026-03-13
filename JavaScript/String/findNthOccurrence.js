// Q) find nth occurrence of particular character
let str = 'bananananana'
let occur = 4
let index = -1
let char = 'a'

for(let i=1; i<=occur; i++){
    index = str.indexOf(char, index+1)
    if(index === -1) break;
}
console.log("Index: "+index);

