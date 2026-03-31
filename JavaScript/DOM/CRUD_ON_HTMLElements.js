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


// 3)parentElement.append(childNode1, childNode2......):add elements into DOM, add multiple nodes at a time, can add text directly using this.
console.log("3)parentElement.append(childNode1, childNode2......)---------");

let div2 = document.createElement('div')
div2.innerText = "Hello Div using append()"
body.append(div2)

let para1 = document.createElement('p')
para1.innerText = "Paragraph-1 using append()"
let para2 = document.createElement('p')
para2.innerText = "Paragraph-2 using append()"
body.append(para1,para2)//we can add multiple nodes
body.append(para1,para2,"Direct add Text using append()")//we can add direct text.


//4)textContent, innerText, innerHTML
console.log("4)textContent, innerText, innerHTML---------------------");

// a)selectorEle.textContent = "content"(its return all text including hidden content, gets/sets all text content(including hidden text))
console.log("a)selectorEle.textContent = 'content'-------");

let head1 = document.createElement('h1')
head1.textContent = "add text using textContent"
body.append(head1)

let hideText = document.getElementById('hide')
body.append(hideText.textContent)//append both visible and hidden element


// b)selectorEle.innerText = "content"(its return only visible text, we used this when we care about only visible content, its ignored the hidden element)
console.log("b)selectorEle.innerText = 'content'---------");

let head4 = document.createElement('h4')
head4.innerText = "Add text using innerText"
body.append(head4)

let hideText2 = document.getElementById('hide')
body.append(hideText2.innerText)//append only visible element


// c)selectorEle.innerHTML = "<b>Content</b>" (its returns or sets HTML content including tags, we used this when we need to insert HTML structure)
console.log('c)selectorEle.innerHTML = "<b>Content</b>"--------');

let getContent = document.getElementById('hide')
console.log(getContent.innerHTML);
body.append(getContent.innerHTML)

let setContent = document.getElementById('hide') 
setContent.innerHTML = "Hi <i>Gagan</i>"
console.log(setContent.innerHTML);
body.append(setContent.innerHTML)


