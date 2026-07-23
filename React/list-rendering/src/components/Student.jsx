import React from 'react'

const students = ["Gagan","Ankita","Dishaa","Nasmita","Piyush","Shahbaz","Vishal"]
function Student() {
  return (
    
    <>
        {/* Way-1 */}
        {/* <h1>List of students in react sessions</h1>
        <ul>
            {
                students.map((std)=>{
                    return(
                        <li>{std}</li>
                    )
                })
            }
        </ul> */}

        {/* Way-2 */}
        {
            students.map((item)=>{
                return <h1>Hello, I am {item}</h1>
            })
        }
    </>
  )
}

export default Student