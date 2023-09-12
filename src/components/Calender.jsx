import React from 'react'

const Calender = () => {
  const handleDateChange = () =>
  console.log("The date has changed")
  return (
    <div className="col-md-5 ms-3 "> 
      <input type="date" className="border  border-info" onChange={handleDateChange}/>
    </div>
  )
}

export default Calender