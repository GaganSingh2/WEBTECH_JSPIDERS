//Q)Decrease the all array elements by 10%
// let arr = [110,150,200,450,750,900]
// for(let i=0; i<arr.length; i++){
//     arr[i] = arr[i]-(arr[i] * 10/100);
// }

// for(let ele of arr){
//     console.log(ele);
    
// }



// Q)Reverse the given string
let str = "javascript"
// console.log(str.split("").reverse().join(""));
// convert in array by using split(""), then reverse the array by using reverse() and then and convert in string using join("")

// Q)FInd the occurance for each character
let val = "we love javascript"

console.log(
    val.split("").reduce((acc,curr)=>{
        acc[curr] = (acc[curr] || 0) +1
        return acc
    }, {})
);
