import React from "react";

const students = ["Gagan","Dishaa","Ankita","Nasmita","Piyush","Shahbaz","Vishal"]

const studentsInfo = [
    {rollno: 101, name:"Gagan"},
    {rollno: 102, name:"Disha"},
    {rollno: 103, name:"Ankita"},
    {rollno: 104, name:"Vishal"},
    {rollno: 105, name:"Karan"},
]

function StudentDetails() {
  return (
    <div>
        <h3>Using key as Index</h3>
        {
            students.map((name, idx)=>{
                return <p key={idx}>{idx} {name}</p>
            })
        }

        <h3>Using key as RollNo</h3>
        {
            studentsInfo.map((student)=>{
                return <p key={student.rollno}>{student.rollno} {student.name}</p>
            })
        }
    </div>
  )
}

export default StudentDetails