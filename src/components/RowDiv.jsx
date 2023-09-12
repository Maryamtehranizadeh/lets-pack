import React from 'react';
import RightComponent from './RightComponent';
import LeftComponent from './LeftComponent';

const RowDiv = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <LeftComponent></LeftComponent>
      <RightComponent></RightComponent>
    </div>
  )
}

export default RowDiv