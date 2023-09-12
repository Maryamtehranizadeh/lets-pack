import React from 'react';
import Activity from './Activity';
import ActivitySelect from './ActivitySelect';

const ActiDiv = () => {
  return (
    <div className="row lead fw-bold text-muted  py-4 bg-light justify-content-space-around">
      <Activity></Activity>
      <ActivitySelect></ActivitySelect>
    </div>
  )
}

export default ActiDiv