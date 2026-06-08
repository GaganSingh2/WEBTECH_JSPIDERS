let body = document.body

let para1 = document.createElement('p')
para1.innerText = "Hey I'm Red!"
body.append(para1)

para1.style.color = 'red'


let h3 = document.createElement('h3')
h3.innerText = "Hey I'm a blue h3"
body.append(h3)
h3.style.color = 'blue'

let div = document.createElement('div')
let h1 = document.createElement('h1')
h1.innerText = "I'm in a div"
let para2 = document.createElement('p')
para2.innerText = "Me Too!"

div.append(h1,para2)

body.append(div)
div.style.border = '2px solid black'
div.style.backgroundColor = 'pink'