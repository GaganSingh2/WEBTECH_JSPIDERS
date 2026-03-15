// Q1) return length of each word in given string and return the largest word
let str = "hii Gagan how are u"
let arr = str.split(" ")
let largestWord = "",maxLen = 0
for(let ele of arr){
    console.log("Word: "+ele+" Length: "+ele.length);
    if(maxLen<ele.length){
        maxLen = ele.length
        largestWord = ele
    }
}
console.log("Largest Word: "+largestWord);

//Q2) return the largest word in given string
str = "hii Gagan how are u"
let maxWord = str.split(" ").reduce((accMax,word)=>{
    return word.length > accMax.length ? word: accMax
},"");
console.log("Largest Word: "+maxWord);


//Q3) Move all 0's to the end of array
console.log("Q)Move all 0's to the end of array");
arr = [0,2,0,4,0,1]
console.log("Before Moving 0's: "+arr);

let right = 0
for(let left = 0; left<arr.length; left++){
    if(arr[left] != 0){
        let tmp = arr[left]
        arr[left] = arr[right]
        arr[right] = tmp
        right++
    }
}
console.log("After Moving 0;s: "+arr); //other appraoch is using filter() store the zero and non-zero in 2 diff array after that concat both array

//Q4) Move all 0's to the first of array
console.log("Q)Move all 0's to the first of array");
arr = [0,2,0,4,0,1,0]
console.log("Before Moving 0's: "+arr);

let left = arr.length-1
for(let right = arr.length-1; right>=0; right--){
    if(arr[right] != 0){
        let tmp = arr[right]
        arr[right] = arr[left]
        arr[left] = tmp
        left--
    }
}
console.log("After Moving 0;s: "+arr);


//Q5) Print the number and string separatoly from the given array
console.log("Q) Print the number and string separatoly from the given array");

arr = [10, "hello", 25, "Gagan", 30, "JS"];
console.log("Before Separating: "+arr);

let num = arr.filter((ele)=>{
    return typeof ele === "number"
})
console.log("Number: "+num);

let strr = arr.filter((ele)=>{
    return typeof ele === "string"
})
console.log("String: "+strr);
//Other approach=>
console.log("Other approach---");

let number = []
let string = []
for(let ele of arr){
    if(typeof ele === 'number'){
        number.push(ele)
    }
    else if(typeof ele === 'string'){
        string.push(ele)
    }
}
console.log("Number: "+number);
console.log("String: "+string);

