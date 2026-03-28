let body = document.body
let table = document.createElement('table')
table.style.borderSpacing = '10px'
table.style.textAlign = "center"
// table.style.border = "2px solid black"
table.style.backgroundColor = 'aqua'
table.style.fontSize = '20px'
table.style.margin = "20px auto"
table.style.boxShadow = '4px 4px 16px red'

//Caption of Table
let capation = document.createElement("caption")
capation.innerText = "Student Information"
capation.style.fontSize ='25px'
capation.style.color = "green"
capation.style.backgroundColor = "black"
table.appendChild(capation)

//Header row
let headerRow = document.createElement('tr')

//Table Header1
let th1 = document.createElement('th')
th1.innerText = "Name"
th1.style.color = 'blue'
th1.style.fontSize = '25px'
th1.style.backgroundColor = 'yellow'
th1.textContent
//Table Header2
let th2 = document.createElement('th')
th2.innerText = "Course"
th2.style.color = 'blue'
th2.style.fontSize = '25px'
th2.style.backgroundColor = 'yellow'

//Table Header3
let th3 = document.createElement('th')
th3.innerText = "CGPA"
th3.style.color = 'blue'
th3.style.fontSize = '25px'
th3.style.backgroundColor = 'yellow'

//Table Header4
let th4 = document.createElement('th')
th4.innerText = "Location"
th4.style.color = 'blue'
th4.style.fontSize = '25px'
th4.style.backgroundColor = 'yellow'
headerRow.append(th1,th2,th3,th4)
table.appendChild(headerRow)


//Create Data Row1
let row1 = document.createElement('tr')
let td1 = document.createElement('td')
td1.innerText = "Gagan"
let td2 = document.createElement('td')
td2.innerText = "Java FullStack"
let td3 = document.createElement('td')
td3.innerText = "8.4"
let td4 = document.createElement('td')
td4.innerText = "Banagalore"
row1.append(td1,td2,td3,td4)

//Create Data Row2
let row2 = document.createElement('tr')
let td5 = document.createElement('td')
td5.innerText = "Dishaa"
let td6 = document.createElement('td')
td6.innerText = "Java FullStack"
let td7 = document.createElement('td')
td7.innerText = "8.9"
let td8 = document.createElement('td')
td8.innerText = "Banagalore"
row2.append(td5,td6,td7,td8)

//Create Data Row3
let row3 = document.createElement('tr')
let td9 = document.createElement('td')
td9.innerText = "Krishna Keshav"
let td10 = document.createElement('td')
td10.innerText = "MERN FullStack"
let td11 = document.createElement('td')
td11.innerText = "7.9"
let td12 = document.createElement('td')
td12.innerText = "Noida"
row3.append(td9,td10,td11,td12)

//Create Data Row4
let row4 = document.createElement('tr')
let td13 = document.createElement('td')
td13.innerText = "Piyush Raj"
let td14 = document.createElement('td')
td14.innerText = "Python FullStack"
let td15 = document.createElement('td')
td15.innerText = "7.9"
let td16 = document.createElement('td')
td16.innerText = "Pune"
row4.append(td13,td14,td15,td16)

table.append(row1,row2,row3,row4)
body.appendChild(table)--/91