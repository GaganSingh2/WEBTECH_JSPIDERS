import React from 'react'

const unionTerritories = [
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];
function IndianUnionTerritories() {
  return (
    <div>
        <p>Chose Your Union Territories</p>
        <select name="" id="">
            <option value="" hidden>--- Choose Here ---</option>
            {
                unionTerritories.map((territore)=>{
                    return <option value={territore}>{territore}</option>
                })
            }
        </select>
    </div>
  )
}

export default IndianUnionTerritories