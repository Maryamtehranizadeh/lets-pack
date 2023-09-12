import React from 'react';
import StartDate from './StartDate';
import Calender from './Calender';

const StartCalender = () => {
  return (

    <div className="row lead fw-bold text-muted py-4 bg-light justify-content-space-around">
      <StartDate></StartDate>
      <Calender></Calender>
    </div>
  )
}

export default StartCalender