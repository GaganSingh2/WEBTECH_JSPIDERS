let mobiles = [
    "Redmi",
    "Vivo",
    "Oppo",
    "Apple",
    "Google Pixel",
    "Samsun"
]

let body = document.body
let con = document.getElementById('container')
let para = document.createElement('p')
para.textContent = "Paragraph"
body.append(para)
body.prepend(para)
// body.after(para) //it print the after the parent or given tag (here he print after the body tag)
// body.before(para) //it print the before the parent or given tag (here he print before the body tag)

let heading1 = document.createElement('h1')
heading1.textContent = "Unordered List"

let ul = document.createElement('ul')
let container = document.getElementById('container')
mobiles.forEach((ele)=>{
    let li = document.createElement('li')
    li.textContent = ele
    ul.append(li)
})
ul.prepend(heading1)
container.append(ul)



let heading2 = document.createElement('h1')
heading2.textContent = "Ordered List"

let ol = document.createElement('ol')
let container2 = document.getElementById('container')
mobiles.forEach((ele)=>{
    let li = document.createElement('li')
    li.textContent = ele
    ol.append(li)
})
ol.prepend(heading2)
container2.append(ol)