// DOM SELECTORS--------------------
console.log("DOM Selectors---------------------");

//without using DOM Selectors-------------
console.log("Without Using DOM Selectors---------------");
console.log("Document: ",document);
console.log("Document.body: ",document.body);
console.log("Document.body.h1: ",document.body.h1);
console.log("Document.body.children[0]: ",document.body.children[0]);

// Using DOM Selectors---------
console.log("Using DOM Selectors-----------------------");

//1)getElementById("elementIdName"): selects an element by its Id, return a single element.
console.log("1)getElementById('elementIdName')--------");
let h1 = document.getElementById("dom")
console.log("H1: ",h1);


//2)getElementsByClassName("elementClassName"): select elements by class name. return a collection(HTML Collection) of matching elements.it is similar to array but not array(bcz no array method are allow) only indexes can be accessed.
console.log("2)getElementsByClassName('elementClassName')--------");

let para = document.getElementsByClassName("para")
console.log("Para: ",para);

console.log("para[2]: ",para[2]);
console.log("para[9]: ",para[9]);


//3)getElementsByTagName("tagName"): select elements by tag name like div,h1,p etc. return a HTMLCollection of matching element and we can access elements using indexes and if not found then empty HTMLCollection
console.log("3)getElementsByTagName('tagName')---------");

let paraTag = document.getElementsByTagName('p')
console.log("ParaTag: ",paraTag);

console.log("ParaTag[3]: ",paraTag[3]);

let boldTag = document.getElementsByTagName('b')
console.log("BoldTag: ",boldTag);

console.log("boldTag[3]: ",boldTag[3]);


//4)getElementsByName('nameAttribute'): selects elements by their name attributes. return a collection called NodeList. almost similar to array but not array methods are allow, except forEach and access elements using indexes.
console.log("getElementsByName('nameAttribute')----------");

let spanTag = document.getElementsByName('text')
console.log("SpanTag: ",spanTag);

console.log("forEach on spanTag: ");
spanTag.forEach((ele)=>{
    console.log("Element: ",ele);
})

console.log("spanTag[2]: ",spanTag[2]);
console.log("spanTag[9]: ",spanTag[9]);


// 5)querySelector("#idName/ .className / tagName"):select and return only first matching element, i.e. return single element. then stop after first match. if not found then return null.
console.log("querySelector('#idName/ .className / tagName')--------");

let heading = document.querySelector('#dom')
console.log("Heading: ",heading);

let para1 = document.querySelector('.para')
console.log("Paragraph1: ",para1);

let tagName = document.querySelector('div')
console.log("Div: ",tagName);

let bold = document.querySelector('b')//return null bcz bold tag not present
console.log("Bold: ",bold);


// 6)querySelectorAll("#idName/ .className / tagName"):select all matching element based on idName, className and tagName. return a collection called NodeList. almost similar to array but not array methods are allow, except forEach and access elements using indexes 
console.log("querySelectorAll('#idName/ .className / tagName')--------");

let headings = document.querySelectorAll('#dom')
console.log("Headings: ",headings);
console.log("headings[1]: ",headings[1]);

let paras = document.querySelectorAll('.para')
console.log("Paragraphs: ",paras);
console.log("paras[3]: ",paras[3]);


let tagNames = document.querySelectorAll('div')
console.log("Divs: ",tagNames);
console.log("tagNames[1]: ",tagNames[1]);


let bolds = document.querySelectorAll('b')//return null bcz bold tag not present
console.log("Bold: ",bold);