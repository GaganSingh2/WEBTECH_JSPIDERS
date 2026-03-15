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
console.log("After Moving 0;s: "+arr);

