import React from 'react'
import ActivitySelect from './ActivitySelect'

const ButtonDiv = () => {
  const handleClick = () =>{
    console.log("it is clicked");
    
  }
  return (
    <div className="row lead fw-bold text-muted py-4 px-5 mx-5 ">
      
       <button onClick={handleClick} className="btn btn-lg btn-outline-info fw-bold">Get the list of the stuff I need ...</button>
    </div>
  )
}

export default ButtonDiv