// Q1) For a given array with prices [120, 245, 300, 420, 150, 850] All items have an offer of 10% OFF on them. Change the array to store the final price after applying the offer.

let prices = [120, 245, 300, 420, 150, 850]
for(let idx in prices){
    console.log("Before Discount: "+prices[idx]);
    prices[idx] = prices [idx]- (prices[idx] * 10/100)
     console.log("After 10% Discount: "+prices[idx]);
}


// Q2)WAP to reverse the given string
let str = 'javascript'
console.log("Before Reverseing: "+str);

let res = str.split("").reverse().join("");
console.log("After Reversing: "+res);

// Q3) Find the Frequency for each character in given string
console.log("Q)Find the Frequency for each character in given string");
str = "Gagan kumar singh"
let frequency = str.split("").reduce((acc,currVal)=>{

    acc[currVal] = (acc[currVal] || 0)+1;
    return acc
},{})
console.log("Frequency: ", frequency);
