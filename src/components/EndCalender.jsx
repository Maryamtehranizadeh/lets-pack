import React from 'react';
import EndDate from './EndDate';
import Calender from './Calender';


const EndCalender = () => {
  return (
    <div className="row lead fw-bold text-muted  py-4 bg-light justify-content-space-around">
      <EndDate></EndDate>
      <Calender></Calender>
    </div>
  )
}

export default EndCalender