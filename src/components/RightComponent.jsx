import React from 'react';
import RightTitle from './RightTitle';
import ActiDiv from './ActiDiv';
import StartCalender from './StartCalender';
import EndCalender from './EndCalender';
import LocationMap from './LocationMap';
import ButtonDiv from './ButtonDiv';

const RightComponent = () => {
  return (
    <div className="col-md-8   text-md-center ">
      <RightTitle></RightTitle>
      <ActiDiv></ActiDiv>
      <StartCalender></StartCalender>
      <EndCalender></EndCalender>
      <LocationMap></LocationMap>
      <ButtonDiv></ButtonDiv>

    </div>
  )
}

export default RightComponent