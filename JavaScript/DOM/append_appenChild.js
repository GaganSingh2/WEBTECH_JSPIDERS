let body = document.body

let h1 = document.createElement("h1")
h1.innerHTML = "THis is h1 tag"
body.appendChild(h1)

// let h2 = document.createElement("h2")
// h2.innerHTML = "THis is h2 tag"
// h1.appendChild(h2)

let para = document.createElement("p")
para.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
body.append(para)

let b = document.createElement('b')
b.innerHTML = "Bold Tag"
h1.append(b)