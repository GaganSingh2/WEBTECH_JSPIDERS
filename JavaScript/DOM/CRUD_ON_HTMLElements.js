// CRUD on HTML Elements
console.log("CRUD on HTML Elements-----------------------");

// document.body → gives you the <body> section only
let body = document.body

//1)document.createElement('tagName'): create a new HTML Element, it must be appended by appendChild() or append() to be visible on the page.
console.log("1)document.createElement('tagName')------------");

let p = document.createElement('p')
p.innerText = "Hello World!"
body.appendChild(p)

let btn = document.createElement('button')
btn.innerText = "Click Me"
body.appendChild(btn)

//2)parentElement.appendChild(childNode):add element into DOM, add only one node at a time, can't add text directly using this.
console.log("2)parentElement.appendChild(childNode)----------");

let div = document.createElement('div')
div.innerText = "Hello Div using appendChild()"
body.appendChild(div)
// body.appendChild(div,btn) //not append both, bydefault append only first element i.e. div
// body.appendChild(div,'Text') //append only first element bcz we can't add dirctly text. 
