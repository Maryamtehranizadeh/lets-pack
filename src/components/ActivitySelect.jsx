import React from 'react'

const ActivitySelect = () => {
  const handleChange = () => {
    console.log("it is changed");
  }
  return (
    <div className="col-md-5 ms-3 ">

      <select className="form-select border border-info" aria-label="Default select   example" onChange={handleChange} >
        <option key={1} value="10">Hicking</option>
        <option key={2} value="1">Skiing</option>
        <option key={3} value="2">Camping</option>
        <option key={4} value="3">Canyoning</option>
        <option key={5} value="4">Mountain Climbing</option>
        <option key={6} value="1">Trekking</option>
        <option key={7} value="2">Paragliding</option>
        <option key={8} value="3">Surfing</option>
        <option key={9} value="8">Dating</option>
        <option key={10} value="1">Business trip</option>
        <option key={11} value="2">Caving</option>
        <option key={12} value="3">Diving</option>
      </select>
    </div>
    
  )
}

export default ActivitySelect