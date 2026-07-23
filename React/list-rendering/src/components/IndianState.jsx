import React from 'react'

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];
function IndianState() {
  return (
    <div>
        <p>Chose Your State:</p>
        <select name="" id="">
            <option value="" hidden>--- Choose Here ---</option>
            {
                indianStates.map((state)=>{
                    return <option value={state}>{state}</option>
                })
            }
        </select>
    </div>
  )
}

export default IndianState