let str = ["gagan","Gagan",'piyus','karan','akash','Dishaa']
console.log(str.sort()); 

let arr = [10,20,30,100,110,200,5,2]
console.log(arr.sort()); //internally this sort() convert each array in String type and then perform comparision on unicode value character by character.

//if we want to sort on the number 
console.log("Ascending: "+arr.sort((a,b)=> a-b)); //Ascending order
console.log(arr.sort((a,b)=> b-a)); //Descending order


//reverse()
console.log(arr.reverse());

console.log(str.reverse());
