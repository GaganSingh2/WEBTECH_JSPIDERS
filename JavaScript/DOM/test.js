let pcontainer = document.createElement('div')
let bcontainer = document.createElement('div')
let hcontainer = document.createElement('div')

for(let i=1; i<=10; i++){
    let button = document.createElement('button')
    button.textContent = `btn-${i}`
    bcontainer.append(button)

    let heading = document.createElement('h1')
    heading.textContent = `Heading-${i}`
    hcontainer.append(heading)

    let para = document.createElement('p')
    para.textContent = `Paragraph-${i}`
    pcontainer.append(para)
}

document.body.append(bcontainer,hcontainer,pcontainer)